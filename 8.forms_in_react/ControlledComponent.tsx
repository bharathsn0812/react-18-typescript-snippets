// ControlledComponent.tsx
import React, { useState } from 'react';

const ControlledComponent: React.FC = () => {
  // Define state to hold the form data
  const [inputValue, setInputValue] = useState<string>('');

  // Handler for input change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Submitted value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Controlled Input:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledComponent;

/*
Explanation:
- This component uses a state variable (inputValue) to control the value of the input field.
- The handleInputChange function updates the state whenever the input value changes.
- The handleSubmit function handles form submission, preventing the default form action and displaying the current input value.
*/
