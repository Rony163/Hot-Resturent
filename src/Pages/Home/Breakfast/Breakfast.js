import React from 'react';
import { NavLink } from 'react-router-dom';
import './Breakfast.css';

const Breakfast = ({ breakfast }) => {
    const { id, img, name, description, price } = breakfast;
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

export default Breakfast;