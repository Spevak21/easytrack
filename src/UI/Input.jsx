import styled from 'styled-components';
import { colors, opacity, shadows } from '../util/variables';

import Calendar from '../assets/calendar.svg';

const StyledInput = styled.input`
  position: relative;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  padding: 0.7rem 0.8rem;
  color: ${colors.white};
  border: 1px solid ${colors.white + opacity[25]};
  border-radius: 0.8rem;
  transition: 0.25s ease-out;

  height: 3.2rem;
  background-color: ${colors.white + opacity[5]};
  box-shadow: ${shadows.shadowSmall};

  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid ${colors.highlightBlue};
    box-shadow: ${shadows.fullGlowHover};
    outline: none;
  }

  &:disabled {
    color: ${colors.white + opacity[25]};
    border: none;
    box-shadow: none;
  }

  &.valid {
    border-color: ${colors.valid};
  }

  &.invalid {
    border-color: ${colors.invalid};
  }

  &[type='date'],
  &[type='datetime-local'] {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0.8rem;
      height: 1.6rem;
      width: 1.6rem;
      transform: translateY(50%);
      background-image: url(${Calendar});
      background-size: contain;
      background-repeat: no-repeat;
      pointer-events: none;
    }

    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
  }
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
