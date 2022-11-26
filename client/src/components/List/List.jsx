import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

import './list.scss';
import ListItem from './ListItem/ListItem';

const List = ({ icon, onClick, user }) => {
  const data = useSelector((state) => state.wishlist.data);

  return (
    <Card className='list'>
      {data?.map((item) => (
        <ListItem
          id={item.id}
          key={item.id}
          icon={icon}
          item={item.name}
          onClick={onClick}
          user={user}
        />
      ))}
    </Card>
  );
};

export default List;
