import React from 'react';

// Avoiding unnecessary re-renders in React can significantly improve the performance of your application. Key techniques include using React.memo, useMemo, useCallback, and ensuring state and props are optimized.

const ChildComponent: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Click me</button>;
});

const AvoidingReRenders: React.FC = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        console.log('Button clicked');
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
            <ChildComponent onClick={handleClick} />
        </div>
    );
};

export default AvoidingReRenders;
