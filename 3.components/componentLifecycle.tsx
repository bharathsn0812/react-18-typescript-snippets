// React components have a lifecycle that you can hook into to run code at specific times during the component's existence. This is mainly used in class components.

// Component lifecycle example in TypeScript
import React, { Component } from 'react';

// Define the state type
interface LifecycleDemoState {
    counter: number;
}

class LifecycleDemo extends Component<{}, LifecycleDemoState> {
    // Called when the component is first created
    constructor(props: {}) {
        super(props);
        this.state = { counter: 0 };
    }

    // Called immediately after the component is added to the DOM
    componentDidMount() {
        console.log('Component did mount!');
    }

    // Called just before the component is removed from the DOM
    componentWillUnmount() {
        console.log('Component will unmount!');
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}

export default LifecycleDemo;
