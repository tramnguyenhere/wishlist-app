import React from 'react';

import Card from 'react-bootstrap/Card';
import './list.scss';
import ListItem from './ListItem/ListItem';

const List = () => {
  return (
    <Card className='list'>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Card>
  );
};

export default List;
