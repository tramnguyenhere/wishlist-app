import React from 'react';

import './btn.scss';
import { Button } from 'react-bootstrap';

const Btn = ({ name, disabled, className, type, onClick, id }) => {
  return (
    <Button
      className={`btn ${className}`}
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default Btn;
