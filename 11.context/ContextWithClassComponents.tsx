// ContextWithClassComponents.tsx
import React, { Component } from 'react';
import { MyContext, MyProvider } from './CreatingContext'; // Import context and provider

class ClassConsumerComponent extends Component {
  // Define the context type for the class component
  static contextType = MyContext;

  render() {
    // Access context value using this.context
    const context = this.context;
    return (
      <div>
        {/* Display the value from the context */}
        Context Value: {context.key}
      </div>
    );
  }
}

const App: React.FC = () => {
  return (
    // Wrap components with the provider to supply context value
    <MyProvider>
      <ClassConsumerComponent />
    </MyProvider>
  );
};

export default App;
