import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

import './list.scss';
import ListItem from './ListItem/ListItem';

const List = ({ icon }) => {
  const data = useSelector((state) => state.wishlist.data);

  console.log(data);
  return (
    <Card className='list'>
      {data?.map((item) => (
        <ListItem id={item.id} key={item.id} icon={icon} item={item.name} />
      ))}
    </Card>
  );
};

export default List;
