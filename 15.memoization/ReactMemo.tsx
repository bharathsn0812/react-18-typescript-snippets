import React from 'react';

// React.memo is a higher order component. If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component and reuse the last rendered result.

interface ChildComponentProps {
    name: string;
}

const ChildComponent: React.FC<ChildComponentProps> = React.memo(({ name }) => {
    console.log('ChildComponent rendered');
    return <div>Hello, {name}</div>;
});

const ParentComponent: React.FC = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
            <ChildComponent name="John Doe" />
        </div>
    );
};

export default ParentComponent;
