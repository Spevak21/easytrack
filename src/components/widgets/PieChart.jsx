import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, opacity, shadows } from '../../util/variables';
import { formatNumber } from '../../util/helpers';

import Refresh from '../../assets/refresh.svg';
import Info from '../../assets/info.svg';

const StyledPieChart = styled.div.attrs(
  ({ $active, $finished, $discarded, $category }) => {
    if ($category === 'active') {
      return {
        style: {
          background: `conic-gradient(
            ${colors.blue5} 0%,
            ${colors.blue5 + opacity[40]} ${$active}%,
            ${colors.validDark + opacity[20]} ${$active}%,
            ${colors.validDark + opacity[10]} ${$finished}%,
            ${colors.invalidDark + opacity[20]} ${$finished}%,
            ${colors.invalidDark + opacity[10]} ${$discarded}%,
            transparent ${$discarded}%
          )`,
        },
      };
    } else if ($category === 'finished') {
      return {
        style: {
          background: `conic-gradient(
            ${colors.blue5 + opacity[20]} 0%,
            ${colors.blue5 + opacity[10]} ${$active}%,
            ${colors.validDark} ${$active}%,
            ${colors.validDark + opacity[40]} ${$finished}%,
            ${colors.invalidDark + opacity[20]} ${$finished}%,
            ${colors.invalidDark + opacity[10]} ${$discarded}%,\
            transparent ${$discarded}%
          )`,
        },
      };
    } else if ($category === 'discarded') {
      return {
        style: {
          background: `conic-gradient(
            ${colors.blue5 + opacity[20]} 0%,
            ${colors.blue5 + opacity[10]} ${$active}%,
            ${colors.validDark + opacity[20]} ${$active}%,
            ${colors.validDark + opacity[10]} ${$finished}%,
            ${colors.invalidDark} ${$finished}%,
            ${colors.invalidDark + opacity[40]} ${$discarded}%,
            transparent ${$discarded}%
          )`,
        },
      };
    } else {
      return {
        style: {
          background: `conic-gradient(
            ${colors.blue5} 0%,
            ${colors.blue5 + opacity[40]} ${$active}%,
            ${colors.validDark} ${$active}%,
            ${colors.validDark + opacity[40]} ${$finished}%,
            ${colors.invalidDark} ${$finished}%,
            ${colors.invalidDark + opacity[40]} ${$discarded}%,
            transparent ${$discarded}%
          )`,
        },
      };
    }
  }
)`
  position: relative;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  flex-shrink: 0;

  .icon {
    @starting-style {
      opacity: 0;
    }
  }

  label {
    position: absolute;
    top: 3rem;
    left: calc(50% - 5rem);
    width: 10rem;
    margin-bottom: 0;
    transform-origin: 5rem 7rem;
    transition: all 0.5s;
    pointer-events: none;

    @starting-style {
      opacity: 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      pointer-events: all;
      cursor: pointer;
    }

    span {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      white-space: nowrap;
      text-shadow: ${shadows.shadowSmall};
      pointer-events: none;
    }
  }

  .reset {
    position: absolute;
    top: 0;
    right: 0;
  }

  .ball {
    height: 2rem;
    width: 2rem;
    background-color: ${colors.white + opacity[15]};
    border-radius: 50%;
    margin-inline: auto;
  }
`;

function PieChart({ data, onSelect }) {
  const active = data.filter((project) => project.status === 'active');
  const discarded = data.filter((project) => project.status === 'discarded');
  const finished = data.filter((project) => project.status === 'finished');

  const total = data.length;
  const activePerc = (active.length / total) * 100;
  const discardedPerc = (discarded.length / total) * 100;
  const finishedPerc = (finished.length / total) * 100;

  const [currentActive, setCurrentActive] = useState(0);
  const [currentFinished, setCurrentFinished] = useState(0);
  const [currentDiscarded, setCurrentDiscarded] = useState(0);

  const [activeEnded, setActiveEnded] = useState(false);
  const [finishedEnded, setFinishedEnded] = useState(false);

  const [category, setCategory] = useState('');

  const handleClick = (e) => {
    if (e.target.classList.contains('active')) {
      setCategory('active');
      onSelect('active');
    } else if (e.target.classList.contains('finished')) {
      setCategory('finished');
      onSelect('finished');
    } else if (e.target.classList.contains('discarded')) {
      onSelect('discarded');
      setCategory('discarded');
    }
  };

  const handleReset = () => {
    setCategory('');
    onSelect('');
  };

  useEffect(() => {
    let start;
    let frameId;
    const duration = activePerc * 10; // mimic the old 10ms * steps logic

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      // How far along the animation is (0 to 1)
      const progress = Math.min(elapsed / duration, 1);
      // Calculate current number based on progress
      const currentValue = Math.floor(progress * activePerc);
      setCurrentActive(currentValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCurrentActive(activePerc);
        setActiveEnded(true);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [activePerc]);

  useEffect(() => {
    if (!activeEnded) return;

    let start;
    let frameId;
    const duration = finishedPerc * 10;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * finishedPerc);
      setCurrentFinished(currentValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCurrentFinished(finishedPerc);
        setFinishedEnded(true);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [finishedPerc, activeEnded]);

  useEffect(() => {
    if (!activeEnded || !finishedEnded) return;

    let start;
    let frameId;
    const duration = discardedPerc * 10;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * discardedPerc);
      setCurrentDiscarded(currentValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCurrentDiscarded(discardedPerc);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [discardedPerc, activeEnded, finishedEnded]);

  // ============= SUBOPTIMAL APPROACH =============
  // useEffect(() => {
  //   if (!activeEnded || !finishedEnded) return;

  //   let countDiscarded = 0;
  //   let intervalDiscarded = setInterval(() => {
  //     if (countDiscarded < discardedPerc) {
  //       setCurrentDiscarded((prev) => prev + 1);
  //       countDiscarded++;
  //     } else {
  //       clearInterval(intervalDiscarded);
  //     }
  //   }, 10);
    
  //   return () => clearInterval(intervalDiscarded);
  // }, [discardedPerc, activeEnded, finishedEnded]);

  const activeDeg = 3.6 * activePerc - (360 * activePerc) / 100 / 2;
  const finishedDeg = 3.6 * (activePerc + finishedPerc) - (360 * finishedPerc) / 100 / 2;
  const discardedDeg = 3.6 * (activePerc + finishedPerc + discardedPerc) - (360 * discardedPerc) / 100 / 2;

  return (
    <StyledPieChart
      $active={currentActive}
      $finished={currentActive + currentFinished}
      $discarded={currentActive + currentFinished + currentDiscarded}
      $category={category}
      onClick={handleClick}
    >
      {category !== '' && (
        <img
          className="icon reset"
          src={Refresh}
          alt="Refresh icon"
          onClick={handleReset}
        />
      )}
      {currentActive ? (
        <label
          style={{
            transform: `rotate(${activeDeg}deg)`,
            opacity: `${category !== 'active' && category !== '' ? 0.5 : 1}`,
          }}
        >
          {activePerc > 12.5 || category === 'active' ? (
            <div
              className="active"
              style={{ transform: `rotate(-${activeDeg}deg)` }}
            >
              <span>
                {active.length} project{active.length > 1 && 's'}
              </span>
              <span>({formatNumber(activePerc)}%)</span>
            </div>
          ) : (
            <div
              className="ball"
              style={{ transform: `rotate(-${activeDeg}deg)` }}
            >
              <img className="icon active" src={Info} alt="Info icon" />
            </div>
          )}
        </label>
      ) : (
        ''
      )}
      {currentFinished ? (
        <label
          style={{
            transform: `rotate(${finishedDeg}deg)`,
            opacity: `${category !== 'finished' && category !== '' ? 0.5 : 1}`,
          }}
        >
          {finishedPerc > 12.5 || category === 'finished' ? (
            <div
              className="finished"
              style={{ transform: `rotate(-${finishedDeg}deg)` }}
            >
              <span>
                {finished.length} project{finished.length > 1 && 's'}
              </span>
              <span>({formatNumber(finishedPerc)}%)</span>
            </div>
          ) : (
            <div
              className="ball"
              style={{ transform: `rotate(-${finishedDeg}deg)` }}
            >
              <img className="icon finished" src={Info} alt="Info icon" />
            </div>
          )}
        </label>
      ) : (
        ''
      )}
      {currentDiscarded ? (
        <label
          style={{
            transform: `rotate(${discardedDeg}deg)`,
            opacity: `${category !== 'discarded' && category !== '' ? 0.5 : 1}`,
          }}
        >
          {discardedPerc > 12.5 || category === 'discarded' ? (
            <div
              className="discarded"
              style={{ transform: `rotate(-${discardedDeg}deg)` }}
            >
              <span>
                {discarded.length} project{discarded.length > 1 && 's'}
              </span>
              <span>({formatNumber(discardedPerc)}%)</span>
            </div>
          ) : (
            <div
              className="ball"
              style={{ transform: `rotate(-${discardedDeg}deg)` }}
            >
              <img className="icon discarded" src={Info} alt="Info icon" />
            </div>
          )}
        </label>
      ) : (
        ''
      )}
    </StyledPieChart>
  );
}

PieChart.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
};

export default PieChart;
