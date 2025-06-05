import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, opacity } from '../util/variables';

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 4.8rem;
  height: 2.4rem;
  margin: 0;

  span {
    position: absolute;
    inset: 0;
    border: 1px solid ${colors.white + opacity[25]};
    border-radius: 3.2rem;
    background-color: ${({ $state }) => $state ? colors.blue5 : 'transparent'};
    transition: 0.4s;
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      height: 1.6rem;
      width: 1.6rem;
      left: 0.4rem;
      top: 0.3rem;
      border-radius: 50%;
      background-color: ${colors.white};
      ${({ $state }) => ($state ? 'transform: translateX(2.2rem);' : '')}
      transition: 0.4s;
    }
  }
`;

function ToggleSwitch({ state, onClick }) {
  return (
    <StyledToggle $state={state}>
      <span onClick={onClick} />
    </StyledToggle>
  );
}

ToggleSwitch.propTypes = {
  state: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ToggleSwitch;
