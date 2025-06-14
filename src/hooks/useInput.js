import { useState } from 'react';

export function useInput(defaultValue, validation) {
  const [value, setValue] = useState(defaultValue);

  const isValid = validation(value);

  const handleChange = (e) => {
    if (e.target) {
      setValue(e.target.value);
    } else {
      setValue(e)
    }
  };

  return {
    value,
    handleChange,
    invalid: !isValid,
  };
}
