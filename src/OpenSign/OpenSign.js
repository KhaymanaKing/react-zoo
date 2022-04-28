import React from 'react';

export default function OpenSign({ isOpen }) {
  return (
    <div>
      {isOpen 
        ? 'Welcome to the Zoo!!!'
        : 'Get Out we are closed!'
      }
    </div>
  );
}
