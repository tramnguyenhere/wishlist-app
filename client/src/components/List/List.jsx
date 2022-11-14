import React from 'react';

import Card from 'react-bootstrap/Card';
import './list.scss';
import ListItem from './ListItem/ListItem';

const List = ({ icon, item }) => {
  return (
    <Card className='list'>
      <ListItem icon={icon} item={item} />
      <ListItem icon={icon} item={item} />
      <ListItem icon={icon} item={item} />
      <ListItem icon={icon} item={item} />
    </Card>
  );
};

export default List;
