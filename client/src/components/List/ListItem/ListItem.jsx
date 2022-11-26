import React from 'react';
import './listitem.scss';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ListItem = ({ icon, item, id, user }) => {
  return (
    <Card.Body id={id} className='list-item__wrapper'>
      <div className='list-item'>
        <i className='fa-solid fa-circle dot'></i>
        <Link
          to={user ? `/user/wishes/${id}` : `/wishes/${id}`}
          className='list-item__name'
        >
          {item}
        </Link>
        <Link
          to={user ? `/user/wishes/${id}` : `/wishes/${id}`}
          className='gift'
        >
          <i className={icon}></i>
        </Link>
      </div>
      <hr />
    </Card.Body>
  );
};

export default ListItem;
