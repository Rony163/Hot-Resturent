import React from 'react';
import BreakfastAll from '../BreakfastAll/BreakfastAll';
import DinnerAll from '../DinnerAll/DinnerAll';
import FoodHeader from '../FoodHeader/FoodHeader';
import LunchAll from '../LunchAll/LunchAll';

const Home = () => {
    return (
        <div>
            <FoodHeader></FoodHeader>
            <BreakfastAll></BreakfastAll>
            <DinnerAll></DinnerAll>
            <LunchAll></LunchAll>
        </div>
    );
};

export default Home;