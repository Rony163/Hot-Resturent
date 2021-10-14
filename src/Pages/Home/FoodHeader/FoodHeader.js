import React, { useState } from 'react';
import BreakfastAll from '../BreakfastAll/BreakfastAll';
import DinnerAll from '../DinnerAll/DinnerAll';
import LunchAll from '../LunchAll/LunchAll';
import './FoodHeader.css';

const FoodHeader = () => {
    const [isBreakfast, setIsBreakfast] = useState(true);
    const [isLaunch, setIsLaunch] = useState(false);
    const [isDinner, setIsDinner] = useState(false);
    return (
        <div>
            <div className="food-header">
                <h4 className="f-head" onClick={() => {
                    setIsBreakfast(true);
                    setIsLaunch(false);
                    setIsDinner(false);
                }}>Breakfast</h4>

                <h4 className="f-head" onClick={() => {
                    setIsBreakfast(false);
                    setIsLaunch(true);
                    setIsDinner(false);
                }}>Launch</h4>

                <h4 className="f-head" onClick={() => {
                    setIsBreakfast(false);
                    setIsLaunch(false);
                    setIsDinner(true);
                }}>Dinner</h4>

            </div>
            {
                isBreakfast &&
                <div>
                    <BreakfastAll></BreakfastAll>
                </div>
            }
            {
                isLaunch &&
                <div>
                    <LunchAll></LunchAll>
                </div>
            }
            {
                isDinner &&
                <div>
                    <DinnerAll></DinnerAll>
                </div>
            }
        </div>
    );
};

export default FoodHeader;