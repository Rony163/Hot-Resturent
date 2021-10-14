import { useEffect, useState } from "react"

const useDinner = () => {
    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Rony163/Hot-Resturent/main/public/dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])
    return [
        dinner,
        setDinner
    ]
}

export default useDinner;