import React from 'react';
import { NavLink } from 'react-router-dom';

const Dinner = ({ dinner }) => {
    const { id, img, name, description, price } = dinner;
    return (
        <NavLink style={{ color: 'black', textDecoration: 'none' }} to={`/detail/${id}`}>
            <div className="food-container">
                <img style={{ width: '150px' }} src={img} alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>
        </NavLink>
    );
};

export default Dinner;