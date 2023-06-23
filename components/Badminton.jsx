import React, { useState } from 'react'

const Badminton = () => {
    const [leftScore, setleftScore] = useState(0);
    const [rightScore, setRightScore] = useState(0);



    const clickleft = () => {
        setleftScore(leftScore + 1);
    }

    const clickright = () => {
        setRightScore(rightScore + 1);
    }

  return (
    <div>
        <h1>
            <p>Score : {leftScore}</p> 
            <button onClick={clickleft}>Left</button>
        </h1>
        <h1>
            <p style={{display:"flex", gap:".5rem"}}>Score : {rightScore}</p>
        <button onClick={clickright}>Right</button>
        </h1>
    </div>
  );
};

export default Badminton