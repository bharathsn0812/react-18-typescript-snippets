// ConditionalRenderingTernary.tsx
import React from 'react';

interface Props {
    isLoggedIn: boolean;
}

const ConditionalRenderingTernary: React.FC<Props> = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
        </div>
    );
};

export default ConditionalRenderingTernary;
