import React, { useState } from 'react';

// Define the type for the props
interface ChildComponentProps {
    initialCount: number;
}

/**
 * This component demonstrates the difference between state and props.
 * Props are passed to the component, while state is managed within the component.
 */
const ChildComponent: React.FC<ChildComponentProps> = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

/**
 * The parent component passes initialCount as a prop to the ChildComponent.
 */
const ParentComponent: React.FC = () => {
    return <ChildComponent initialCount={0} />;
};

export default ParentComponent;
