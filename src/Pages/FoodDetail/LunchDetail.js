import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useLunch from '../../hooks/useLunch';
import './SingleDetails.css';

const LunchDetails = () => {
    const { foodId } = useParams();
    const [lunchAll] = useLunch();

    const [matchFood, setMatchFood] = useState({});
    const intFoodId = parseInt(foodId);

    useEffect(() => {
        const found = lunchAll.find(lunch => lunch.id === intFoodId);
        setMatchFood(found)
    }, [lunchAll, intFoodId])

    let [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1)
    }

    const handleMinus = () => {
        if (count === 0) {
            setCount(0)
        } else {
            setCount(count - 1)
        }

    }
    return (
        <div>
            <div className="single-food">
                <div>
                    <h1>{matchFood?.name}</h1>
                    <p>{matchFood?.description}</p>
                    <h3>${matchFood?.price}
                        <button onClick={handleMinus}><i class="fas fa-minus"></i></button>
                        <input style={{ width: '30px' }} type="number" class="form-control text-center" value={count} />
                        <button onClick={handlePlus}><i class="fas fa-plus"></i></button>
                    </h3>
                    <button><i class="fas fa-shopping-cart"></i>Add Items</button>
                </div>
                <div>
                    <img style={{ width: '400px' }} src={matchFood?.img} alt="" />
                </div>
            </div>
            <Link to="/home"><button>GO HOME</button></Link>
        </div>
    );
};

export default LunchDetails;