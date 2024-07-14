// UpdatingContext.tsx
import React, { useState, useContext } from 'react';
import { MyProvider } from './CreatingContext'; // Import provider

// Create a new context that includes a method to update the state
const UpdatableContext = React.createContext({
  key: 'default',
  setKey: (value: string) => {}
});

const UpdatableProvider: React.FC = ({ children }) => {
  const [key, setKey] = useState('initial value'); // State to be managed by context

  return (
    <UpdatableContext.Provider value={{ key, setKey }}>
      {children} {/* Render children components that consume the context */}
    </UpdatableContext.Provider>
  );
};

const ConsumerComponent: React.FC = () => {
  const { key, setKey } = useContext(UpdatableContext); // Consume context value and updater

  return (
    <div>
      {/* Display the current value from the context */}
      Context Value: {key}
      {/* Button to update the context value */}
      <button onClick={() => setKey('new value')}>Update Context</button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    // Wrap components with the provider to supply context value and updater
    <UpdatableProvider>
      <ConsumerComponent />
    </UpdatableProvider>
  );
};

export default App;
