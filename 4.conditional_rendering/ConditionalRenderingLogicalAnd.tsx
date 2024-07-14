// ConditionalRenderingLogicalAnd.tsx
import React from 'react';

interface Props {
    isAdmin: boolean;
}

const ConditionalRenderingLogicalAnd: React.FC<Props> = ({ isAdmin }) => {
    return (
        <div>
            {isAdmin && <h1>Admin Panel</h1>}
        </div>
    );
};

export default ConditionalRenderingLogicalAnd;
