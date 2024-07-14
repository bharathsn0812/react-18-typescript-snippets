import React from 'react';

// Define the type for props
type GreetingProps = {
  name: string;
};

// Functional component receiving props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Usage of the component with props
const App = () => {
  return <Greeting name="John" />;
};

export default App;

/*
Explanation:
- We define a type `GreetingProps` with a single property `name` of type string.
- The `Greeting` component is a functional component that takes `GreetingProps`.
- The component uses the `name` prop to display a greeting message.
- In the `App` component, we pass the `name` prop to `Greeting` when rendering it.
*/
