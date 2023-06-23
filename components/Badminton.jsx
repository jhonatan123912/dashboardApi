import { useState } from "react"


function App() {
    const [score, setScore] = useState(0);

const pointClick = (points) => {
    setScore(score + points);
};

return (
    <div>
        <h1>Score</h1>
        <button onClick={() => pointClick(1)}> 1 Point</button>
        <button onClick={() => pointClick(2)}> 2 Point</button>
        <button onClick={() => pointClick(3)}> 3 Point</button>
    </div>

);
}



export default Basketball;