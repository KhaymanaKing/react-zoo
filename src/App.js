import './App.css';
import ParadeList from './Parade/ParadeList';

import { useState } from 'react';

function App() {
  const [animal, setAnimal] = useState (['giraffe', 'walrus']);
  
  function handleGiraffe(){
    animal.push('giraffe');
    setAnimal([...animal]);
  }
  function handleWalrus(){
    animal.push('walrus');
    setAnimal([...animal]);
  }
  function handleTurtle(){
    animal.push('turtle');
    setAnimal([...animal]);
  }
  function handleSnake(){
    animal.push('snake');
    setAnimal([...animal]);
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ParadeList animals ={animal}/> 
      
      <div className='animal-buttons'>
        <button onClick={handleGiraffe}>Giraffe</button>
        <button onClick={handleWalrus}>Walrus</button>
        <button onClick={handleTurtle}> Turtle</button>
        <button onClick={handleSnake}>Snake</button>
      </div>
    </div>
  );
}

export default App;
