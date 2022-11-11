import React from 'react';

import './listitem.scss';

import Card from 'react-bootstrap/Card';

const ListItem = () => {
  return (
    <Card.Body className='list-item__wrapper'>
      <div className='list-item'>
        <i className='fa-solid fa-circle dot'></i>
        <Card.Link className='list-item__name'>
          Casio collection LTP-V001GL
        </Card.Link>
        <Card.Link className='gift'>
          <i className='fa-solid fa-gift '></i>
        </Card.Link>
      </div>
      <hr />
    </Card.Body>
  );
};

export default ListItem;
