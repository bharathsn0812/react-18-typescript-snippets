// WebpackDynamicImports.tsx

import React, { useState } from 'react';

/*
Webpack and Dynamic Imports:

Webpack allows you to split your code into various bundles which can be loaded on demand.
Dynamic imports enable you to import modules dynamically, which can help in code splitting.
*/

const WebpackDynamicImports: React.FC = () => {
    const [Component, setComponent] = useState<React.ComponentType | null>(null);

    const loadComponent = async () => {
        const { default: LoadedComponent } = await import('./DynamicComponent');
        setComponent(() => LoadedComponent);
    };

    return (
        <div>
            <h1>Webpack and Dynamic Imports</h1>
            <button onClick={loadComponent}>Load Component</button>
            {Component && <Component />}
        </div>
    );
};

export default WebpackDynamicImports;
