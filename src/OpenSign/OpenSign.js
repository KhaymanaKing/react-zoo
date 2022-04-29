import React from 'react';
import './Open.css';

export default function OpenSign({ isOpen }) {
  return (
    <div className= {isOpen ? 'open' : 'closed'}>
      {isOpen 
        ? 'Welcome to the Zoo!!!'
        : 'Get Out we are closed!'
      }
    </div>
  );
}
