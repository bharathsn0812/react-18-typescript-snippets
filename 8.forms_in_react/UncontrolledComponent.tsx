// UncontrolledComponent.tsx
import React, { useRef } from 'react';

const UncontrolledComponent: React.FC = () => {
  // Create a ref to access the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      alert(`Submitted value: ${inputRef.current.value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uncontrolled Input:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;

/*
Explanation:
- This component uses a ref (inputRef) to access the value of the input field directly from the DOM.
- The handleSubmit function handles form submission, preventing the default form action and displaying the current input value accessed through the ref.
*/
