import { useState } from 'react';

export function useInput(defaultValue, validation) {
  const [value, setValue] = useState(defaultValue);

  const isValid = validation(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    handleChange,
    invalid: !isValid,
  };
}
