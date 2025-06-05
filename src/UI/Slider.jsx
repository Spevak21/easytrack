import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, opacity, shadows } from '../util/variables';

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      width: 100%;
      font-size: 1.2rem;

      &:first-of-type {
        text-align: left;
      }

      &.value {
        text-align: center;
        font-weight: bold;
      }

      &:last-of-type {
        text-align: right;
      }
    }
  }

  input[type='range'] {
    appearance: none;
    height: 0.4rem;
    background-color: ${colors.blue3 + opacity[3]};
    border-radius: 0.4rem;
    outline: none;
    box-shadow: 0 0 0.4rem ${colors.blue1} inset;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 1.6rem;
      height: 1.6rem;
      border: 1px solid ${colors.white + opacity[25]};
      border-radius: 50%;
      background-color: ${colors.white + opacity[50]};
      box-shadow: ${shadows.shadowSmall};
      backdrop-filter: blur(1px);
      cursor: grab;
    }

    &::-moz-range-thumb {
      appearance: none;
      width: 1.6rem;
      height: 1.6rem;
      border: 1px solid ${colors.white + opacity[25]};
      border-radius: 50%;
      background-color: ${colors.white + opacity[50]};
      box-shadow: ${shadows.shadowSmall};
      backdrop-filter: blur(1px);
      cursor: grab;
    }

    &:hover {
      &::-webkit-slider-thumb {
        box-shadow: 0 0 12px ${colors.blue5 + opacity[30]} inset;
      }
    }
  }
`;

function Slider({ min, max, value, onChange, ...rest }) {
  return (
    <StyledSlider>
      <div>
        <span>{min}</span>
        <span className="value">{value}</span>
        <span>{max}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </StyledSlider>
  );
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Slider;
