import React from 'react';

// useMemo is a hook that memoizes the result of a function. This helps to optimize the performance of your application by preventing expensive calculations on every render.

// useCallback is similar to useMemo, but instead of memoizing the result of a function, it memoizes the function itself. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

const UseMemoUseCallbackExample: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const [item, setItem] = React.useState(5);

    const expensiveCalculation = React.useMemo(() => {
        console.log('Calculating...');
        return item * 2;
    }, [item]);

    const memoizedCallback = React.useCallback(() => {
        console.log('Callback invoked');
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
            <p>Expensive Calculation Result: {expensiveCalculation}</p>
            <button onClick={memoizedCallback}>Call Memoized Callback</button>
        </div>
    );
};

export default UseMemoUseCallbackExample;
