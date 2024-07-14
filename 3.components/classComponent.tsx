// Class components are more feature-rich compared to functional components. They allow the use of state and lifecycle methods.

// Class component example in TypeScript
import React, { Component } from 'react';

// Define the types for the component's props and state
interface GreetingProps {
    name: string;
}

interface GreetingState {
    // Define any state properties here if needed
}

// A simple class component that extends React.Component
class Greeting extends Component<GreetingProps, GreetingState> {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

export default Greeting;