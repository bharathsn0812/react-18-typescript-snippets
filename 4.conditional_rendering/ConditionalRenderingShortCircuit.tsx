// ConditionalRenderingShortCircuit.tsx
import React from 'react';

interface Props {
    isLoggedIn: boolean;
}

const ConditionalRenderingShortCircuit: React.FC<Props> = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn && <h1>Welcome back!</h1>}
            {!isLoggedIn && <h1>Please log in.</h1>}
        </div>
    );
};

export default ConditionalRenderingShortCircuit;
