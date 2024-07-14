// useStateAndUseEffect.ts

/*
 * useState and useEffect
 * ----------------------
 * - useState: A hook that allows you to add state to a functional component.
 *   It returns a stateful value and a function to update it.
 * - useEffect: A hook for performing side effects in functional components.
 *   It runs after the first render and after every update.
 */

// Example using useState and useEffect
import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has changed to ${count}`);
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;
