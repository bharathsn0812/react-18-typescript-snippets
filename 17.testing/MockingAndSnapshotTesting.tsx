// MockingAndSnapshotTesting.tsx

/**
 * This file demonstrates how to use mocking and snapshot testing.
 * Mocking allows you to simulate the behavior of complex dependencies, while snapshot testing helps in capturing the rendered output of a component and comparing it to previous renders.
 */

import React from 'react';

const FetchData: React.FC<{ data: string }> = ({ data }) => {
  return <div>Data: {data}</div>;
};

const MockingAndSnapshotTesting: React.FC = () => {
  return (
    <div>
      <h1>Mocking and Snapshot Testing</h1>
      <FetchData data="Sample Data" />
    </div>
  );
};

export default MockingAndSnapshotTesting;

// MockingAndSnapshotTesting.test.tsx
/**
 * This file contains tests for the `FetchData` component defined in `MockingAndSnapshotTesting.tsx`.
 * It demonstrates both mocking and snapshot testing.
 */

import React from 'react';
import { render } from '@testing-library/react';
import MockingAndSnapshotTesting, { FetchData } from './MockingAndSnapshotTesting';

// Mocking example
jest.mock('./MockingAndSnapshotTesting', () => ({
  ...jest.requireActual('./MockingAndSnapshotTesting'),
  FetchData: ({ data }: { data: string }) => <div>Mocked Data: {data}</div>,
}));

test('renders mocked data', () => {
  const { getByText } = render(<FetchData data="Sample Data" />);
  expect(getByText('Mocked Data: Sample Data')).toBeInTheDocument();
});

// Snapshot testing example
test('matches snapshot', () => {
  const { asFragment } = render(<MockingAndSnapshotTesting />);
  expect(asFragment()).toMatchSnapshot();
});
