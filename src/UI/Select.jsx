import { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, opacity, shadows } from '../util/variables';
import { generateID } from '../util/helpers';

import ChevronBold from '../assets/chevron-bold.svg';

const StyledSelect = styled.div`
  position: relative;

  .head {
    position: relative;
    font-size: 1.6rem;
    padding: 0.7rem 2.4rem 0.7rem 0.8rem;
    color: ${colors.white};
    border: 1px solid ${colors.white + opacity[25]};
    border-radius: 0.8rem;
    background-color: ${colors.white + opacity[5]};
    box-shadow: ${shadows.shadowSmall};
    transition: 0.25s ease-out;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      top: 0.7rem;
      right: 0.8rem;
      height: 1.6rem;
      width: 1.6rem;
      background-image: url(${ChevronBold});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: transform 0.25s ease-out;
    }

    span {
      display: block;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .body {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 14.8rem;
    width: 100%;
    border: 1px solid ${colors.white + opacity[25]};
    border-top: 0;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    background-color: ${colors.white + opacity[5]};
    backdrop-filter: blur(20px);
    z-index: 1;
    opacity: 0;
    transition: 0.25s ease-out;

    &.visible {
      opacity: 1;
    }

    input {
      height: 2.4rem;
      padding: 0.4rem 0.8rem;
      font-size: 1.4rem;
      color: ${colors.white + opacity[75]};
      border: none;
      background-color: transparent;
      box-shadow: ${shadows.shadowSmall};

      &::placeholder {
        color: ${colors.white + opacity[50]};
      }

      &:focus {
        outline: none;
      }
    }

    .list {
      max-height: 12rem;

      &.scrollable {
        overflow-y: scroll;
      }

      & > div {
        padding: 0.4rem 0.8rem;
        font-size: 1.6rem;
        cursor: pointer;

        &:hover,
        &.selected {
          background-color: ${colors.white + opacity[5]};
        }
      }
    }
  }

  &:hover,
  &:focus-visible,
  &:focus-within {
    .head {
      border: 1px solid ${colors.highlightBlue};
      box-shadow: ${shadows.fullGlowHover};
      outline: none;
    }

    .body {
      border: 1px solid ${colors.highlightBlue};
      border-top: 0;
      box-shadow: ${shadows.fullGlowHover};
    }
  }

  &.open {
    .head {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      &:after {
        transform: rotate(180deg);
      }
    }

    .body {
      display: block;
    }
  }

  &.disabled {
    pointer-events: none;

    .head {
      border: none;
      box-shadow: none;

      &::after {
        opacity: 0.25;
      }
      span {
        color: ${colors.white + opacity[25]};
      }
    }
  }

  &.valid {
    .head {
      border-color: ${colors.valid};
    }
  }

  &.invalid {
    .head {
      border-color: ${colors.invalid};
    }
  }

  select {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    padding: 0;
    opacity: 0;
    clip: rect(0 0 0 0);
    pointer-events: none;
  }
`;

function Select({ options, initial = '', className = '', disabled, ...props }) {
  // States for select's dropdown visibility toggle
  const [state, setState] = useState('');
  const [dropdownOpacity, setDropdownOpacity] = useState('');

  const [value, setValue] = useState(
    typeof initial === 'object' ? initial.value : initial
  );
  const [text, setText] = useState(
    typeof initial === 'object' ? initial.text : initial
  );

  const [searchValue, setSearchValue] = useState('');

  const refList = useRef(null);

  const handleSelectToggle = () => {
    if (state) {
      setDropdownOpacity('');
      setTimeout(() => {
        setState('');
        setSearchValue('');
        refList.current.scrollTo(0, 0);
      }, 250);
    } else {
      setState('open');
      setTimeout(() => {
        setDropdownOpacity('visible');
      }, 10);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOptionClick = (e) => {
    setText(e.target.textContent);
    setValue(e.target.dataset.value);
    handleSelectToggle();
  };

  const filteredOptions = options.filter((el) => {
    if (typeof el === 'string') {
      return el.toLowerCase().includes(searchValue.toLowerCase());
    } else if (typeof el === 'object') {
      return el.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  });

  const optionElements = filteredOptions.map((el) => {
    if (typeof el === 'string') {
      return (
        <div
          key={generateID()}
          className={text === el ? 'selected' : ''}
          onClick={handleOptionClick}
          data-value={el}
        >
          {el}
        </div>
      );
    } else if (typeof el === 'object') {
      return (
        <div
          key={generateID()}
          className={text === el.text ? 'selected' : ''}
          onClick={handleOptionClick}
          data-value={el.value}
        >
          {el.text}
        </div>
      );
    }
  });

  const nativeOptions = options.map((el) => {
    if (typeof el === 'string') {
      return (
        <option key={generateID()} value={el}>
          {el}
        </option>
      );
    } else if (typeof el === 'object') {
      return (
        <option key={generateID()} value={el.value}>
          {el.text}
        </option>
      );
    }
  });

  const isScrollable = filteredOptions.length > 5 ? 'scrollable' : '';

  return (
    <StyledSelect
      className={`${className} ${state} ${disabled ? 'disabled' : ''}`}
    >
      <div
        className="head"
        onClick={handleSelectToggle}
        tabIndex={disabled ? -1 : 0}
      >
        <span>{text ? text : 'Please select'}</span>
      </div>
      <div className={`body ${dropdownOpacity}`}>
        {options.length >= 10 && (
          <input
            type="text"
            placeholder="Search..."
            spellCheck="false"
            value={searchValue}
            onChange={handleSearchChange}
          />
        )}
        <div ref={refList} className={`list ${isScrollable}`}>
          {optionElements}
        </div>
      </div>

      <select
        value={value}
        readOnly
        disabled={disabled}
        tabIndex={-1}
        {...props}
      >
        {!initial && (
          <option disabled hidden value="">
            Please select
          </option>
        )}
        {nativeOptions}
      </select>
    </StyledSelect>
  );
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Select;
