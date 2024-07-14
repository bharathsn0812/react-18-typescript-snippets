// FormEvents.tsx
import React, { useState } from 'react';

const FormEvents: React.FC = () => {
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
        Input:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormEvents;

/*
Explanation:
- This component demonstrates handling form events, such as input changes and form submission.
- The handleInputChange function updates the state when the input value changes.
- The handleSubmit function handles form submission, preventing the default form action and displaying the current input value.
*/
