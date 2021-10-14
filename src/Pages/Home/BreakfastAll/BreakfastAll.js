import React from 'react';
import useBreakfast from '../../../hooks/useBreakfast';
import Breakfast from '../Breakfast/Breakfast';
import './BreakfastAll.css';

const BreakfastAll = () => {
    const [breakfastAll, setBreakfastAll] = useBreakfast();
    return (
        <div className="breakfastall-container">
            {breakfastAll.map(breakfast => <Breakfast
                key={breakfast.id}
                breakfast={breakfast}
            ></Breakfast>)}
        </div>
    );
};

export default BreakfastAll;