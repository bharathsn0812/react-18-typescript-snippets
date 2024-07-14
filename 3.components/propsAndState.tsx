// Props and state are two types of data that control a component.

//     Props: Short for properties, these are read-only and passed down from parent to child components.
//     State: Data that is local to a component and can be changed over time.

// Props and state example in TypeScript
import React, { Component } from 'react';

// Define the type for the child component's props
interface ChildProps {
    name: string;
}

// A child component that receives props from its parent
const Child: React.FC<ChildProps> = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

// Define the state type for the parent component
interface ParentState {
    name: string;
}

// A parent component that manages state
class Parent extends Component<{}, ParentState> {
    constructor(props: {}) {
        super(props);
        this.state = { name: 'World' };
    }

    changeName = () => {
        this.setState({ name: 'React' });
    };

    render() {
        return (
            <div>
                <Child name={this.state.name} />
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default Parent;
