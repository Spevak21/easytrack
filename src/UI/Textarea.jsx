import styled from 'styled-components';

import { colors, opacity, shadows } from '../util/variables';

const StyledTextarea = styled.textarea`
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  padding: 0.7rem 0.8rem;
  color: ${colors.white};
  border: 1px solid ${colors.white + opacity[25]};
  border-radius: 0.8rem;
  transition: 0.25s ease-out;

  resize: vertical;
  min-height: 10rem;
  max-height: 40rem;
  outline: none;
  background-color: ${colors.white + opacity[5]};

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
`;

function Textarea(props) {
  return <StyledTextarea {...props}></StyledTextarea>;
}

export default Textarea;
