import React from 'react';

import './listitem.scss';

import Card from 'react-bootstrap/Card';

const ListItem = ({ icon, item }) => {
  return (
    <Card.Body id='1' className='list-item__wrapper'>
      <div className='list-item'>
        <i className='fa-solid fa-circle dot'></i>
        <Card.Link to='/:id' className='list-item__name'>
          {item}
        </Card.Link>
        <Card.Link to='/item/1' className='gift'>
          <i className={icon}></i>
        </Card.Link>
      </div>
      <hr />
    </Card.Body>
  );
};

export default ListItem;
