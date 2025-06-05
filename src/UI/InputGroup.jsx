import { cloneElement, useId } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { colors } from '../util/variables';

const StyledGroup = styled.div`
  width: 100%;

  label.error {
    color: ${colors.invalid};
  }
`;

function InputGroup({ id, label, error, children }) {
  const fallbackId = useId();

  const ID = id ? id : fallbackId;

  const child = cloneElement(children, {
    id,
    className: error ? 'invalid' : '',
  });

  return (
    <StyledGroup>
      {label && (
        <label htmlFor={ID} className={error ? 'error' : ''}>
          {!error ? label : error}
        </label>
      )}
      {child}
    </StyledGroup>
  );
}

InputGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.object,
};

export default InputGroup;
