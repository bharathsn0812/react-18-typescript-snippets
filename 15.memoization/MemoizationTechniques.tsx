import React from 'react';

// Memoization is an optimization technique to speed up your applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

const MemoizationExample = () => {
    const expensiveCalculation = (num: number) => {
        console.log('Calculating...');
        return num * 2;
    };

    const memoizedCalculation = React.useCallback((num: number) => {
        return expensiveCalculation(num);
    }, []);

    return (
        <div>
            <p>Result: {memoizedCalculation(5)}</p>
        </div>
    );
};

export default MemoizationExample;
