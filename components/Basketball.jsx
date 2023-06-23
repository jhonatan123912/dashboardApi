import { useState } from 'react';

const Basketball = () => {
    const [count, setcount] = useState(0);

    const score = (points) => {
    setcount (count + points)
    }
  return (
    <div>
        <h1>Count Score : {count}</h1>
        <button onClick={() => score(1)}> 1 point</button>
        <button onClick={() => score(2)}> 2 point</button>
        <button onClick={() => score(3)}> 3 point</button>
    </div>
  )
}

export default Basketball