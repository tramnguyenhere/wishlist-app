import React from 'react';

import './btn.scss';
import { Button } from 'react-bootstrap';

const Btn = ({ name, className, type, onClick }) => {
  return (
    <div>
      <Button className={`btn ${className}`} type={type} onClick={onClick}>
        {name}
      </Button>
    </div>
  );
};

export default Btn;
