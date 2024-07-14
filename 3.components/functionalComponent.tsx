

// Functional components are TypeScript functions that return a React element. They are simple and easy to write.

// Functional component example in TypeScript
import React from 'react';

// Define the type for the component's props
interface GreetingProps {
    name: string;
}

// A simple functional component that takes props as an argument
const Greeting: React.FC<GreetingProps> = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;

