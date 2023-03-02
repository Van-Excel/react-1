import React from 'react';
import './style.css';
import { Greet } from './components/Greet';
import { Message } from './components/Message';
export default function App() {
  return (
    <div className="nn">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Greet name="Vanexcel" description="He is a good boy" age={21} />
      <Greet name="Obo" description="he is a boxer" age={21} />
      <Message />
    </div>
  );
}
