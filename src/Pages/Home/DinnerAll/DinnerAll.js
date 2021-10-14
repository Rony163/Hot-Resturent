import React from 'react';
import useDinner from '../../../hooks/useDinner';

const DinnerAll = () => {
    const [dinner, setDinner] = useDinner();
    return (
        <div>
            <h2>This is dinner {dinner.length}</h2>
        </div>
    );
};

export default DinnerAll;