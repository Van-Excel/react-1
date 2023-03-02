import React from 'react';
import { useState } from 'react';

export const Message = () => {
  const [message, setMessage] = useState('Welcome boy');
  return (
    <div>
      <h2> {message} </h2>
      <button onClick ={() => setMessage('Clicked')}>click me</button>
    </div>
  );
};
