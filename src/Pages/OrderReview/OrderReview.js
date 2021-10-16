import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const OrderReview = () => {
    const location = useLocation();
    const food = location.state?.matchFood;
    const itemNumber = location.state?.count;

    return (
        <div>
            <h1>Place Order</h1>
            <h1>{food?.name}</h1>
            <h4>Per Item Price: {food?.price}</h4>
            <h4>{food?.price * itemNumber}</h4>

            <NavLink to='/home'>
                <button>Back To Home page</button>
            </NavLink>

        </div>
    );
};

export default OrderReview;