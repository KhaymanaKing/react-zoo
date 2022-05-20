import React, { useState } from 'react';
import './Open.css';
import Button from '@mui/material/Button';

export default function OpenSign() {
  const [isOpen, setIsOpen] = useState(true);
  function handleOpen(){
    setIsOpen(true);
  }
  function handleClose(){
    setIsOpen(false);
  }

  return (
    <div className= {isOpen ? 'open' : 'closed'}>
      {isOpen 
        ? 'Welcome to the Zoo!!!'
        : 'Get Out we are closed!'
      }
      <Button variant='contained'value='open' onClick={handleOpen}>Open?</Button>
      <Button variant='contained' color='error' value='close' onClick={handleClose}>Close it Down!</Button>
    </div>
  );
}
