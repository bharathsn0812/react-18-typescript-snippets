import React, { useState } from 'react';

/**
 * This component demonstrates the use of the useState hook to manage state in a functional component.
 */
const Counter: React.FC = () => {
    // Declare a state variable named 'count' with an initial value of 0
    const [count, setCount] = useState(0);

    // Function to handle incrementing the count
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

export default Counter;
