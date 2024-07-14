// useContextAndUseReducer.ts

/*
 * useContext and useReducer
 * -------------------------
 * - useContext: A hook that allows you to subscribe to React context without nesting.
 * - useReducer: A hook for managing complex state logic, similar to Redux.
 */

// Example using useContext
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext<string | null>(null);

const MyProvider: React.FC = ({ children }) => {
    const [value, setValue] = useState('Hello from context');

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

const DisplayContextValue: React.FC = () => {
    const contextValue = useContext(MyContext);
    return <div>{contextValue}</div>;
};

// Example using useReducer
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state: typeof initialState, action: { type: string }) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const CounterWithReducer: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
};

export { MyProvider, DisplayContextValue, CounterWithReducer };
