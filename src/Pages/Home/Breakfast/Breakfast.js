import React from 'react';
import './Breakfast.css';

const Breakfast = ({ breakfast }) => {
    const { id, img, name, description, price } = breakfast;
    return (
        <div className="food-container">
            <img style={{ width: '150px' }} src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Breakfast;