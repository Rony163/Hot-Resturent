import React from 'react';
import useDinner from '../../../hooks/useDinner';
import Dinner from '../Dinner/Dinner';

const DinnerAll = () => {
    const [dinnerAll] = useDinner();
    return (
        <div className="foods-container">
            {dinnerAll.map(dinner => <Dinner
                key={dinner.id}
                dinner={dinner}
            ></Dinner>)}
        </div>
    );
};

export default DinnerAll;