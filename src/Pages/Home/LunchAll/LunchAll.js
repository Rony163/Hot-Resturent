import React from 'react';
import useLunch from '../../../hooks/useLunch';
import Lunch from '../Lunch/Lunch';

const LunchAll = () => {
    const [lunchAll, setLunchAll] = useLunch();
    return (
        <div className="foods-container">
            {lunchAll.map(lunch => <Lunch
                key={lunch.id}
                lunch={lunch}
            ></Lunch>)}
        </div>
    );
};

export default LunchAll;