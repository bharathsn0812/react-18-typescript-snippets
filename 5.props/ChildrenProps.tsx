import React from 'react';

// Define the type for props
type CardProps = {
  title: string;
  children: React.ReactNode;
};

// Functional component with children
const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

// Usage of the component with children
const App = () => {
  return (
    <Card title="Card Title">
      <p>This is the card content.</p>
    </Card>
  );
};

export default App;

/*
Explanation:
- We define a type `CardProps` with `title` and `children` properties.
- The `Card` component displays the `title` and any children passed to it.
- In the `App` component, we use `Card` and pass a paragraph as the children.
*/
