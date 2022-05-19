import React from 'react';
import { useState } from 'react';


export default function EatingCompetition() {
  const [otterSize, setOtterSize] = useState(10);
  const [bearSize, setBearSize] = useState(10);

  const SIZE_MODIFIER = 10;

  return (
      
    <div className='eat-comp'>
      <h1> Worlds Smallest Eating Competition </h1>
      <div className='competitor'>
        <div className='emoji' style={{ fontSize: `${otterSize}%` } }>
            🦦</div>       
      </div>      
      <div className='competitor'>
        <div className='emoji' style={{ fontSize: `${bearSize}%` } }>🐻</div>        
      </div>
      <button onClick={() => setBearSize(bearSize + SIZE_MODIFIER)}>The Bear Eats</button>
      <button onClick={() => setOtterSize(otterSize - SIZE_MODIFIER)}>The Bear steals food</button>
      <button onClick={() => setOtterSize(otterSize + SIZE_MODIFIER)}>The Otter Eats</button>
      <button onClick={() => setBearSize(bearSize - SIZE_MODIFIER)}>The Otter steals food</button>
    </div>
  );
}
