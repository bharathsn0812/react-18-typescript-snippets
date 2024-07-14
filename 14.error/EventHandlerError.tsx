// Catching Errors in Event Handlers

// React does not catch errors inside event handlers.
// If an error occurs, it should be caught manually using a try-catch block.

import React from 'react';

const EventHandlerError: React.FC = () => {
  const handleClick = () => {
    try {
      // Simulating an error
      throw new Error("An error occurred!");
    } catch (error) {
      console.error("Caught an error:", error);
      alert("An error occurred! Please try again.");
    }
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default EventHandlerError;
