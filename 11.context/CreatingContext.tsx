// CreatingContext.tsx
// Import necessary modules from React
import React, { createContext } from 'react';

// Create a new context
// This context will hold the state and any methods to update the state
const MyContext = createContext({});

// Create a Provider component to supply the context value to its children
const MyProvider: React.FC = ({ children }) => {
  const contextValue = { key: 'value' }; // Define the context value

  return (
    <MyContext.Provider value={contextValue}>
      {children} {/* Render children components that consume the context */}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
