import './App.css';
import ParadeList from './Parade/ParadeList';


import { useState } from 'react';

function App() {
  const [animal, setAnimal] = useState (['giraffe', 'Dinosaur']);
  
  function handleGiraffe(){
    animal.push('giraffe');
    setAnimal([...animal]);
  }
  function handleDinosaur(){
    animal.push('dinosaur');
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
  function handleDelete(){
    animal.pop();
    setAnimal([...animal]);
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ParadeList animals ={animal}/> 
      
      <div className='animal-buttons'>
        <button onClick={handleGiraffe}>Giraffe</button>
        <button onClick={handleDinosaur}>Dinosaur</button>
        <button onClick={handleTurtle}> Turtle</button>
        <button onClick={handleSnake}>Snake</button>
        <button onClick={handleDelete}>Remove Last?</button>
      </div>
    </div>
  );
}

export default App;
