// ProvidingAndConsumingContext.tsx
import React, { useContext } from 'react';
import { MyContext, MyProvider } from './CreatingContext'; // Import context and provider

const ConsumerComponent: React.FC = () => {
  // Consume the context value using useContext hook
  const context = useContext(MyContext);

  return (
    <div>
      {/* Display the value from the context */}
      Context Value: {context.key}
    </div>
  );
};

const App: React.FC = () => {
  return (
    // Wrap components with the provider to supply context value
    <MyProvider>
      <ConsumerComponent />
    </MyProvider>
  );
};

export default App;
