import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, opacity, shadows } from '../util/variables';

const StyledButton = styled.button`
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  padding: 0.7rem 1.6rem;
  color: ${colors.white};
  border: 1px solid ${colors.white + opacity[25]};
  border-radius: 0.8rem;
  transition: 0.25s ease-out;

  height: fit-content;
  line-height: 1;
  text-shadow: ${shadows.shadowSmall};
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid ${colors.highlightBlue};
    box-shadow: ${shadows.fullGlowHover};
  }

  &:active {
    background-color: ${colors.blue3};
    box-shadow: ${shadows.fullGlowActive};
  }

  &.active {
    background-color: ${colors.blue3};

    &:hover,
    &:focus,
    &:focus-visible {
      box-shadow: ${shadows.fullGlowHover};
    }

    &:active {
      background-color: ${colors.blue3};
      box-shadow: ${shadows.fullGlowActive};
    }
  }

  &.confirm {
    background-color: ${colors.validDark + opacity[50]};

    &:hover,
    &:focus,
    &:focus-visible {
      border: 1px solid ${colors.valid + opacity[50]};
      box-shadow: ${shadows.fullGlowHoverValid};
    }

    &:active {
      background-color: ${colors.validDark + opacity[50]};
      box-shadow: ${shadows.fullGlowActiveValid};
    }
  }

  &.delete {
    background-color: ${colors.invalidDark + opacity[50]};

    &:hover,
    &:focus,
    &:focus-visible {
      border: 1px solid ${colors.invalid + opacity[50]};
      box-shadow: ${shadows.fullGlowHoverInvalid};
    }

    &:active {
      background-color: ${colors.invalidDark + opacity[50]};
      box-shadow: ${shadows.fullGlowActiveInvalid};
    }
  }

  &:disabled {
    pointer-events: none;
    color: ${colors.white + opacity[25]};
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
