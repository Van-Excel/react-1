import React from 'react';

//named export
export const Greet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p> {props.description} </p>
      <p> {props.age} </p>
    </div>
  );
};

//default export
//export default Greet

//named export limits us to use only the name of the component
//default export allows us to use any name for the component
