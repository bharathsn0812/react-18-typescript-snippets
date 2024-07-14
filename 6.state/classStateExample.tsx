import React, { Component } from 'react';

/**
 * This component demonstrates how to manage state in a class component.
 */
class Counter extends Component<{}, { count: number }> {
    constructor(props: {}) {
        super(props);
        // Initialize state with a count value of 0
        this.state = { count: 0 };
    }

    // Method to handle incrementing the count
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
