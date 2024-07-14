// ConditionalRenderingIfElse.tsx
import React from 'react';

interface Props {
    isLoggedIn: boolean;
}

const ConditionalRenderingIfElse: React.FC<Props> = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please log in.</h1>;
    }
};

export default ConditionalRenderingIfElse;
