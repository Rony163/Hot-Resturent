import React from 'react';
import useLunch from '../../../hooks/useLunch';

const LunchAll = () => {
    const [lunch, setLunch] = useLunch();
    return (
        <div>
            <h1>This is lunch {lunch.length}</h1>
        </div>
    );
};

export default LunchAll;