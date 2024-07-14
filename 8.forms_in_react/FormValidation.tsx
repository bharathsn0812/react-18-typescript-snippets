// FormValidation.tsx
import React, { useState } from 'react';

const FormValidation: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Handler for input change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    // Simple validation example: field must not be empty
    if (event.target.value.trim() === '') {
      setError('Input cannot be empty');
    } else {
      setError('');
    }
  };

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue) {
      setError('Input is required');
    } else {
      alert(`Submitted value: ${inputValue}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;

/*
Explanation:
- This component demonstrates basic form validation.
- The handleInputChange function updates the state and checks for validation errors.
- The handleSubmit function checks if the input is valid before submitting the form. If invalid, it displays an error message.
*/
