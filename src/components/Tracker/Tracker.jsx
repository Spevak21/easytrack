import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../../store/data-slice';
import { pauseTracking, resumeTracking } from '../../store/data-actions';
import { addTrackLog } from '../../store/projects-actions';

import { colors, opacity, shadows } from '../../util/variables';
import {
  getCurrentTimestamp,
  resetBgOnMouseLeave,
  trackMouse,
} from '../../util/helpers';

import PlayCircle from '../../assets/play-circle.svg';
import PauseCircle from '../../assets/pause-circle.svg';
import StopCircle from '../../assets/stop-circle.svg';

import Time from '../widgets/Time';

const StyledTracker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;

  .card-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 2.4rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-icons {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      gap: 0.8rem;

      .icon {
        opacity: 0;
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .info {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 1rem;

      .fade-out {
        animation: 0.5s ease-out fade-left forwards;
      }
    }

    .task-description {
      font-size: 1.6rem;
      line-height: 1.8rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .button-group {
    display: flex;
    gap: 1rem;
    align-self: flex-end;

    &.blocked {
      pointer-events: none;

      img {
        opacity: 0.5;
      }
    }

    img {
      filter: drop-shadow(${shadows.shadowSmall});
      cursor: pointer;

      &:hover {
        color: ${colors.primary};
        animation: 0.5s ease-out bobbing forwards;
      }
    }
  }
`;

function Tracker({ tracker }) {
  const dispatch = useDispatch();

  const project = useSelector((state) => state.projects.find((project) => project.id === tracker.projectId));
  const task = project.tasks.find((task) => task.id === tracker.taskId);

  const [trackedTime, setTrackedTime] = useState(() => {
    if (tracker.status === 'active') {
      return Math.floor((getCurrentTimestamp() - tracker.refTime + tracker.trackedTime) / 1000) * 1000;
    } else if (tracker.status === 'paused') {
      return tracker.trackedTime;
    }
  });
  const [isTracking, setIsTracking] = useState(() => {
    if (tracker.status === 'active') {
      return true;
    } else if (tracker.status === 'paused') {
      return false;
    }
  });
  const [animate, setAnimate] = useState('');

  const handleStartTimer = () => {
    setIsTracking(true);
    dispatch(resumeTracking(tracker));
  };

  const handlePauseTimer = () => {
    setIsTracking(false);
    dispatch(pauseTracking(tracker, trackedTime));
  };

  const handleStopTimer = () => {
    setIsTracking(false);
    setAnimate('fade-out');

    setTimeout(() => {
      const data = {
        projectId: tracker.projectId,
        taskId: tracker.taskId,
        trackedTime: Math.floor(trackedTime / 1000) * 1000,
        startedAt: tracker.startedAt,
        endedAt: getCurrentTimestamp(),
      };

      dispatch(addTrackLog(data));
      dispatch(dataActions.removeTracker(tracker.taskId));
    }, 2000);
  };

  const handleMouseMove = (e) => {
    trackMouse(e, colors.white + opacity[3], 'transparent');
  };

  const handleMouseOut = (e) => {
    resetBgOnMouseLeave(e, 'transparent');
  };

  useEffect(() => {
    let interval;
    if (isTracking) {
      interval = setInterval(() => {
        setTrackedTime((prev) => prev + 1000);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTracking]);

  return (
    <StyledTracker
      className="box"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <div className="card-header">
        <h2>{task.name}</h2>
      </div>
      <hr />
      <div className="card-body">
        <div className="info">
          <Time value={tracker.time} addition={animate ? trackedTime : null} title="Task track time" />
          <Time
            value={trackedTime}
            className={`${isTracking ? 'active' : 'paused'} ${animate}`}
            title="Current track time"
          />
        </div>
        <p className="task-description">{task.description}</p>
      </div>
      <hr />
      <div className={`button-group ${animate && 'blocked'}`}>
        {isTracking ? (
          <img src={PauseCircle} alt="Pause icon" onClick={handlePauseTimer} title="Pause tracking" />
        ) : (
          <img src={PlayCircle} alt="Play icon" onClick={handleStartTimer} title="Continue tracking" />
        )}
        <img src={StopCircle} alt="Stop icon" onClick={handleStopTimer} title="Stop tracking" />
      </div>
    </StyledTracker>
  );
}

Tracker.propTypes = {
  tracker: PropTypes.object,
};

export default Tracker;
