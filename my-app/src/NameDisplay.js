import React from 'react';
import './NameDisplay.css';

const NameDisplay = (props) => {
  return (
    <div className="name-display">
      <h2 className="name">{props.name.id}</h2>
      <h2 className="name">{props.name.name}</h2>
    </div>
  );
};

export default NameDisplay;