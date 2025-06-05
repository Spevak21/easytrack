import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, opacity, shadows } from '../../util/variables';
import { formatTimer } from '../../util/helpers';

const StyledTime = styled.span`
  display: inline-block;
  width: fit-content;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${colors.white};
  padding: 0.4rem 1.2rem;
  background-color: ${colors.white + opacity[10]};
  white-space: nowrap;

  border-top: 1px solid ${colors.white + opacity[25]};
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
  border-radius: 2rem;
  box-shadow: ${shadows.shadowSmall};

  &.active {
    background-color: ${colors.blue3};
    border: 1px solid #3784fe;
    box-shadow: ${shadows.fullGlowActive};
  }

  &.paused {
    background-color: ${colors.white + opacity[25]};
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
  }
`;

function Time({ value, addition, ...props }) {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    if (addition) {
      let valueInSeconds = addition / 1000;
      let hours = Math.floor(valueInSeconds / 3600);
      let minutes = Math.floor((valueInSeconds % 3600) / 60);
      let seconds = Math.floor((valueInSeconds % 3600) % 60);

      if (hours) {
        let intervalCounter = 0;
        let intervalHours = setInterval(() => {
          if (intervalCounter < hours) {
            setCounter((prev) => prev + 3600000);
            intervalCounter++;
          } else {
            clearInterval(intervalHours);
          }
        }, 1000 / hours);
      }

      if (minutes) {
        let intervalCounter = 0;
        let intervalMinutes = setInterval(() => {
          if (intervalCounter < minutes) {
            setCounter((prev) => prev + 60000);
            intervalCounter++;
          } else {
            clearInterval(intervalMinutes);
          }
        }, 1000 / minutes);
      }

      if (seconds) {
        let intervalCounter = 0;
        let intervalSeconds = setInterval(() => {
          if (intervalCounter < seconds) {
            setCounter((prev) => prev + 1000);
            intervalCounter++;
          } else {
            clearInterval(intervalSeconds);
          }
        }, 1000 / seconds);
      }
    }
  }, [value, addition]);

  let content;
  if (!addition) {
    content = formatTimer(value);
  } else {
    content = formatTimer(counter);
  }

  return <StyledTime {...props}>{content}</StyledTime>;
}

Time.propTypes = {
  value: PropTypes.number,
  addition: PropTypes.number,
};

export default Time;
