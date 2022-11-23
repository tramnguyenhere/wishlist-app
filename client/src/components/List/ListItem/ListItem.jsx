import React from 'react';
import './listitem.scss';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ListItem = ({ icon, item, id }) => {
  return (
    <Card.Body id={id} className='list-item__wrapper'>
      <div className='list-item'>
        <i className='fa-solid fa-circle dot'></i>
        <Link to={`/wishes/${id}`} className='list-item__name'>
          {item}
        </Link>
        <Link to={`/wishes/${id}`} className='gift'>
          <i className={icon}></i>
        </Link>
      </div>
      <hr />
    </Card.Body>
  );
};

export default ListItem;
