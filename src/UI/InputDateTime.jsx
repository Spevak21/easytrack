import { useEffect, useState } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { formatDate, getCurrentTimestamp, isSafariBrowser } from "../util/helpers";
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

export default function InputDateTime({ name, value, label, error, onChange, type, limit }) {
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
      time = value?.split("T")[1] || formatDate(getCurrentTimestamp(), 'hh:mm:ss');
    }

    onChange(`${date}T${time}`);
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    const date = value?.split("T")[0] || formatDate(getCurrentTimestamp(), 'yyyy-mm-dd');

    onChange(`${date}T${time}`);
  };

  let min = formatDate(getCurrentTimestamp(), 'yyyy-mm-ddThh:mm:ss');
  let max = '';

  if (isSafari) {

    const [datePart, timePart] = value ? value.split('T') : ['', ''];

    let [minDate, minTime] = min.split('T');
    let maxDate, maxTime, errorMsg;

    if (type === 'project' && limit) {
      minDate = formatDate(limit, 'yyyy-mm-dd');
      minTime = formatDate(limit, 'hh:mm:ss');

      let minDateSegments = minDate.split('-');
      let minFormated = `${minDateSegments[1]}/${minDateSegments[2]}/${minDateSegments[0]}`;
      errorMsg = `Value must be ${minFormated} ${minTime} or later`;
    }

    if (type === 'task' && limit) {
      maxDate = formatDate(limit, 'yyyy-mm-dd');
      maxTime = formatDate(limit, 'hh:mm:ss');

      let maxDateSegments = maxDate.split('-');
      let maxFormated = `${maxDateSegments[1]}/${maxDateSegments[2]}/${maxDateSegments[0]}`;
      let minDateSegments = minDate.split('-');
      let minFormated = `${minDateSegments[1]}/${minDateSegments[2]}/${minDateSegments[0]}`;
      
      errorMsg = `Value must be between: ${minFormated} ${minTime} - ${maxFormated} ${maxTime}`;
    }

    return (
      <StyledInput>
        {error && <label>{errorMsg}</label>}
        <div className="datetime-wrapper">
          <InputGroup label={label + '-date'} error={error && ' '}>
            <Input
              name={name + 'Date'}
              type="date"
              value={datePart}
              onChange={handleDateChange}
              min={minDate}
              max={maxDate}
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

  if (type === 'project' && limit) {
    min = formatDate(limit, 'yyyy-mm-ddThh:mm:ss');
  } else if (type === 'task' && limit) {
    max = formatDate(limit, 'yyyy-mm-ddThh:mm:ss');
  }

  return (
    <StyledInput>
      <InputGroup label={label} error={error}>
        <Input
          name={name}
          type="datetime-local"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
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
  type: PropTypes.string,
  limit: PropTypes.number,
};