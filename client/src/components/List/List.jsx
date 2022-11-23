import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';

import './list.scss';
import ListItem from './ListItem/ListItem';

const List = ({ icon }) => {
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  return (
    <Card className='list'>
      {wishlist.map((item) => (
        <ListItem id={item.id} key={item.id} icon={icon} item={item.name} />
      ))}
    </Card>
  );
};

export default List;
