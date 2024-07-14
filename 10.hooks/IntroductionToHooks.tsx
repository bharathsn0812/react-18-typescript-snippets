// IntroductionToHooks.tsx

/*
 * Introduction to Hooks
 * ---------------------
 * React Hooks are functions that let you use state and other React features
 * in functional components. They allow you to reuse stateful logic without
 * changing the component hierarchy.
 *
 * The most commonly used hooks are:
 * - useState: For managing state in a functional component.
 * - useEffect: For performing side effects in a functional component.
 */

// Example of a functional component using hooks
import React, { useState, useEffect } from 'react';

const HookExample: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};

export default HookExample;
