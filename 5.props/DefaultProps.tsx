import React from 'react';

// Define the type for props
type WelcomeProps = {
  message?: string;
};

// Functional component with default props
const Welcome: React.FC<WelcomeProps> = ({ message }) => {
  return <h1>{message}</h1>;
};

// Set default props
Welcome.defaultProps = {
  message: 'Welcome, Guest!',
};

// Usage of the component
const App = () => {
  return <Welcome />;
};

export default App;

/*
Explanation:
- We define a type `WelcomeProps` with an optional `message` property.
- The `Welcome` component displays the `message` prop.
- We set default props for `Welcome`, providing a default message if none is passed.
- In the `App` component, we render `Welcome` without passing the `message` prop, so it uses the default.
*/
