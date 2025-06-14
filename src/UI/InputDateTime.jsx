import { useEffect, useState } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { isSafariBrowser } from "../util/helpers";
import { colors } from "../util/variables";

import InputGroup from "./InputGroup";
import Input from "./Input";

const StyledInput = styled.div`
  position: relative;

  & > label {
    color: ${colors.invalid};
  }

  .datetime-wrapper {
    position: relative;
    display: flex;
    gap: 1.6rem;
    width: 100%;
  }
`

export default function InputDateTime({ name, value, label, error, onChange }) {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(isSafariBrowser());
  }, []);

  const handleDateChange = (e) => {
    const date = e.target.value;
    let time;
    if (!date) {
      time = '';
    } else {
      time = value?.split("T")[1] || new Date().toTimeString().slice(0, 5);
    }

    onChange(`${date}T${time}`);
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    const date = value?.split("T")[0] || new Date().toISOString().split("T")[0];

    onChange(`${date}T${time}`);
  };

  if (!isSafari) {
    const [datePart, timePart] = value ? value.split('T') : ['', ''];

    return (
      <StyledInput>
        {error && <label>{error}</label>}
        <div className="datetime-wrapper">
          <InputGroup label={label + '-date'} error={error && ' '}>
            <Input
              name={name + 'Date'}
              type="date"
              value={datePart}
              onChange={handleDateChange}
            />
          </InputGroup>
          <InputGroup label={label + '-time'} error={error && ' '}>
            <Input
              name={name + 'Time'}
              type="time"
              value={timePart}
              onChange={handleTimeChange}
            />
          </InputGroup>
        </div>
      </StyledInput>
    );
  }

  return (
    <StyledInput>
      <InputGroup label={label} error={error}>
        <Input
          name={name}
          type="datetime-local"
          value={value}
          onChange={onChange}
        />
      </InputGroup>
    </StyledInput>
  );
}

InputDateTime.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};