// Fallback UI

// Fallback UI is the UI shown when an error is caught by an error boundary.
// This is part of the ErrorBoundary component's render method, where we check the hasError state to decide what to display.

import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const FallbackUIExample: React.FC = () => {
  return (
    <ErrorBoundary>
      {/* Simulating a component that throws an error */}
      <FaultyComponent />
    </ErrorBoundary>
  );
};

const FaultyComponent: React.FC = () => {
  throw new Error("I am a faulty component!");
  return <div>This will not render.</div>;
};

export default FallbackUIExample;
