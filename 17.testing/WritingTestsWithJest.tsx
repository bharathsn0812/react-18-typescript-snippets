// WritingTestsWithJest.tsx

/**
 * This file demonstrates how to write tests using Jest.
 * Jest is a popular JavaScript testing framework that comes with built-in assertions, mocking, and test runners.
 * It is used to test JavaScript and TypeScript code, including React components.
 */

import React from 'react';

const add = (a: number, b: number) => a + b;

const WritingTestsWithJest: React.FC = () => {
  return (
    <div>
      <h1>Writing Tests with Jest</h1>
      <p>Learn how to write tests using Jest.</p>
    </div>
  );
};

export default WritingTestsWithJest;

// WritingTestsWithJest.test.tsx
/**
 * This file contains tests for the `add` function defined in `WritingTestsWithJest.tsx`.
 */

import { add } from './WritingTestsWithJest';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
