// TestingComponentsWithRTL.tsx

/**
 * This file demonstrates how to test React components using React Testing Library.
 * React Testing Library provides utilities to test React components by simulating user interactions.
 */

import React from 'react';

const HelloWorld: React.FC = () => {
  return <div>Hello, World!</div>;
};

const TestingComponentsWithRTL: React.FC = () => {
  return (
    <div>
      <h1>Testing Components with React Testing Library</h1>
      <HelloWorld />
    </div>
  );
};

export default TestingComponentsWithRTL;

// TestingComponentsWithRTL.test.tsx
/**
 * This file contains tests for the `HelloWorld` component defined in `TestingComponentsWithRTL.tsx`.
 */

import { render, screen } from '@testing-library/react';
import TestingComponentsWithRTL from './TestingComponentsWithRTL';

test('renders Hello, World!', () => {
  render(<TestingComponentsWithRTL />);
  const helloWorldElement = screen.getByText(/Hello, World!/i);
  expect(helloWorldElement).toBeInTheDocument();
});
