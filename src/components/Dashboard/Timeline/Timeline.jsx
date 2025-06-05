import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/ui-slice';

import { colors, opacity } from '../../../util/variables';
import {
  formatDate,
  formatNumber,
  getCurrentTimestamp,
  getTimestamps,
  resetBgOnMouseLeave,
  trackMouse,
} from '../../../util/helpers';

import Gear from '../../../assets/gear.svg';
import Chevron from '../../../assets/chevron-bold.svg';

import Time from '../../widgets/Time';
import Row from './Row';

const StyledTimeline = styled.div.attrs(({ $marker }) => ({
  style: {
    '--marker-position': `${$marker}%`,
    '--marker-display': $marker ? 'block' : 'none',
  },
}))`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .column-left {
    display: flex;
    flex-direction: column;

    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        cursor: pointer;

        &.prev {
          transform: rotate(90deg);
        }

        &.next {
          transform: rotate(-90deg);
        }
      }
    }

    .vertical {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      height: 100%;
      margin-top: 0.8rem;

      .segment {
        display: inline-block;
        height: 100%;
        text-align: center;
        align-content: center;
        font-size: 1.6rem;
        padding: 0.8rem;

        @starting-style {
          transform: translateX(-100%);
          opacity: 0;
        }
      }
    }
  }

  .column-right {
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    width: 100%;

    .horizontal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.8rem;
      height: 2.4rem;

      .marker {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        width: 2.6rem;
        white-space: nowrap;

        @starting-style {
          transform: translateY(-100%);
          opacity: 0;
        }
      }
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      height: 100%;
      margin: 0.8rem 1.3rem 0 2.1rem;

      .tooltip {
        position: absolute;
        display: none;
        flex-direction: column;
        gap: 0.8rem;
        height: fit-content;
        max-width: 20rem;
        padding: 1.2rem;
        z-index: 1;

        &::before {
          border-color: transparent;
        }
      }

      .lines {
        position: absolute;
        inset: -5px 0 0 0;
        display: flex;
        justify-content: space-between;

        .line {
          width: 1px;
          background-color: ${colors.white + opacity[5]};
        }
      }

      &::before {
        display: var(--marker-display);
        content: '';
        position: absolute;
        bottom: 0;
        left: var(--marker-position);
        height: calc(100% + 0.4rem);
        width: 1px;
        background-color: ${colors.invalidDark + opacity[50]};
      }

      &::after {
        display: var(--marker-display);
        content: '';
        position: absolute;
        top: -0.8rem;
        left: calc(var(--marker-position) - 0.2rem);
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background-color: ${colors.invalidDark};
      }
    }
  }
`;

function Timeline({ className }) {
  const dispatch = useDispatch();
  const timeline = useSelector((state) => state.ui.timeline);

  const [week, setWeek] = useState(getTimestamps(getCurrentTimestamp(), 'week'));
  const [info, setInfo] = useState({
    taskId: null,
    taskName: '',
    logTime: null,
  });
  const tooltipRef = useRef(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleTimelineModal = () => {
    dispatch(uiActions.setFormType('timeline-settings'));
  };

  const calculateHorizontal = (start, end, type) => {
    const result = [];
    if (type === '24h') {
      for (let i = 0; i <= end - start; i++) {
        if (start + i < 10) {
          result.push('0' + (start + i) + ':00');
        } else {
          result.push(start + i + ':00');
        }
      }
    } else if (type === '12h') {
      for (let i = 0; i <= end - start; i++) {
        if (start + i === 0 || start + i === 24) {
          result.push(12 + ' AM');
        } else if (start + i === 12) {
          result.push(12 + ' PM');
        } else if (start + i < 12) {
          result.push(start + i + ' AM');
        } else {
          result.push(start + i - 12 + ' PM');
        }
      }
    }
    return result;
  };

  const calculateVertical = (scope) => {
    if (scope === 'days-full') {
      return [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];
    } else if (scope === 'days-short') {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    } else if (scope === 'dates-full') {
      return dates.map((date) => formatDate(date, 'dd.mm.yyyy.'));
    } else if (scope === 'dates-short') {
      return dates.map((date) => formatDate(date, 'dd.mm.yyyy.').slice(0, -5));
    }
  };

  const trackCursor = (e) => {
    const tooltip = tooltipRef.current;

    if (e.target.classList.contains('bar')) {
      const { clientX, clientY } = e;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      tooltip.style.display = 'flex';
      tooltip.style.top = y - tooltip.offsetHeight + 'px';
      tooltip.style.left = x + 'px';
    } else {
      tooltip.style.display = 'none';
    }
  };

  const handlePreviousWeek = () => {
    setWeek((prev) => getTimestamps(prev.start - 3600000, 'week'));
  };

  const handleNextWeek = () => {
    setWeek((prev) => getTimestamps(prev.end + 3600000, 'week'));
  };

  const handleMouseMove = (e) => {
    trackMouse(e, colors.white + opacity[3], 'transparent');
  };

  const handleMouseLeave = (e) => {
    resetBgOnMouseLeave(e, 'transparent');
  };

  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(formatDate(week.start + 86400000 * i, 'yyyy-mm-dd'));
  }

  const markers = calculateHorizontal(
    timeline.startAt,
    timeline.endAt,
    timeline.clockType
  );
  const segments = calculateVertical(timeline.rowLabel);

  useEffect(() => {
    let interval;

    const calculateMarker = () => {
      const currentTimestamp = getCurrentTimestamp();
      const dayTimeFrame = getTimestamps(currentTimestamp, 'day');
      const start = dayTimeFrame.start + timeline.startAt * 3600000;
      const end = dayTimeFrame.start + timeline.endAt * 3600000;
      const position = formatNumber(((currentTimestamp - start) / (end - start)) * 100, 2);
      setMarkerPosition(position);
    };

    if (getCurrentTimestamp() > week.start && getCurrentTimestamp() < week.end) {
      calculateMarker();

      interval = setInterval(() => {
        calculateMarker();
      }, 60000);
    } else {
      setMarkerPosition(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeline.startAt, timeline.endAt, week.start, week.end]);

  return (
    <StyledTimeline
      className={`${className} box`}
      $marker={markerPosition}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="column-left">
        <div className="options">
          <img
            src={Chevron}
            alt="Arrow left icon"
            className="prev"
            onClick={handlePreviousWeek}
          />
          <img
            src={Gear}
            alt="Settings icon"
            onClick={handleTimelineModal}
          />
          <img
            src={Chevron}
            alt="Arrow right icon"
            className="next"
            onClick={handleNextWeek}
          />
        </div>
        <div className="vertical">
          {segments.map((segment, i) => {
            return (
              <span
                className="segment"
                key={segment}
                style={{ transition: `all .1s ${0.05 * i}s ease-out` }}
              >
                {segment}
              </span>
            );
          })}
        </div>
      </div>
      <div className="column-right">
        <div className="horizontal">
          {markers.map((marker, i) => {
            return (
              <span
                className="marker"
                key={marker + i}
                style={{ transition: `all .1s ${0.05 * i}s ease-out` }}
              >
                {marker}
              </span>
            );
          })}
        </div>
        <div className="content" onMouseMove={trackCursor}>
          <div className="tooltip box" ref={tooltipRef}>
            <p>{info.taskName}</p>
            <Time value={info.logTime} />
          </div>
          <div className="lines">
            {markers.map((marker, i) => (
              <div key={i} className="line" />
            ))}
          </div>
          {dates.map((date) => (
            <Row
              key={date}
              date={date}
              timeScale={{ start: timeline.startAt, end: timeline.endAt }}
              targetId={info.taskId}
              handleInfo={setInfo}
            />
          ))}
        </div>
      </div>
    </StyledTimeline>
  );
}

Timeline.propTypes = {
  className: PropTypes.string,
};

export default Timeline;
