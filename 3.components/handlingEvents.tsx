// Handling events in React is similar to handling events in regular HTML. However, in React, events are named using camelCase, and you pass a function as the event handler.

// Handling events example in TypeScript
import React from 'react';

class EventHandling extends React.Component {
    handleClick = () => {
        alert('Button clicked!');
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default EventHandling;
