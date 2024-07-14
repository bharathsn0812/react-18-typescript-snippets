// ReactLazyAndSuspense.tsx

import React, { Suspense } from 'react';

/*
React.lazy and Suspense:

React.lazy() is a function that enables you to render a dynamic import as a regular component. Suspense is a component that lets you handle loading states when using React.lazy or other asynchronous operations.
*/

const LazyComponent = React.lazy(() => import('./SomeComponent'));

const ReactLazyAndSuspense: React.FC = () => {
    return (
        <div>
            <h1>React.lazy and Suspense</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
};

export default ReactLazyAndSuspense;
