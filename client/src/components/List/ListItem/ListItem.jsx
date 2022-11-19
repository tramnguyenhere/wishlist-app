import React from 'react';

import './listitem.scss';

import Card from 'react-bootstrap/Card';

const ListItem = ({ icon, item }) => {
  return (
    <Card.Body id='1' className='list-item__wrapper'>
      <div className='list-item'>
        <i className='fa-solid fa-circle dot'></i>
        <Card.Link className='list-item__name'>{item}</Card.Link>
        <Card.Link className='gift'>
          <i className={icon}></i>
        </Card.Link>
      </div>
      <hr />
    </Card.Body>
  );
};

export default ListItem;
