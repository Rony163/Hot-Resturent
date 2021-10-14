import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useBreakfast from '../../hooks/useBreakfast';

const BreakfastDetail = () => {
    const { foodId } = useParams();
    const [matchFood, setMatchFood] = useState({});

    const intFoodId = parseInt(foodId);

    const [breakfastAll] = useBreakfast();
    const found = breakfastAll.find(breakfast => breakfast.id === intFoodId);
    console.log(found.name)
    // setMatchFood(found);

    // console.log(matchFood)

    // const { name } = found;
    // console.log(name)
    return (
        <div>
            {/* {found.name} */}
        </div>
    );
};

export default BreakfastDetail;