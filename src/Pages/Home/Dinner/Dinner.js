import React from 'react';

const Dinner = ({ dinner }) => {
    const { id, img, name, description, price } = dinner;
    return (
        <div className="food-container">
            <img style={{ width: '150px' }} src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Dinner;