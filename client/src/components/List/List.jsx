import React from 'react';
import { v4 as uuid } from 'uuid';
import Card from 'react-bootstrap/Card';
import { legacy_createStore as createStore } from 'redux';
import './list.scss';
import ListItem from './ListItem/ListItem';

const List = ({ icon, item }) => {
  const itemReducer = (state = [], action) => {
    if (action.type === 'NEW_ITEM') {
      state.push(action.data);
      return state;
    }

    return state;
  };

  const store = createStore(itemReducer);

  store.dispatch({
    type: 'NEW_ITEM',
    data: {
      name: 'Casio collection LTP-V001GL',
      whereToBuy:
        'https://www.blue-tomato.com/en-FI/product/Casio-LTP+1154PQ+7BEG+Watch-701505/?varid=304985575&cr=EUR&_$ja=tsid%3A46445&adword=Google%2FFI%2FPRODUKTERWEITERUNG%2FCasio%2F304985575&gclid=Cj0KCQiAg_KbBhDLARIsANx7wAyKiAqUOyJsPCi9s6BhSrmWRv6ujJULw_ysTFh0m8x030uuP4DeXuEaAhk7EALw_wcB',
      id: uuid(),
    },
  });

  return (
    <Card className='list'>
      {store.getState().map((item) => (
        <ListItem key={item.id} icon={icon} item={item} />
      ))}
    </Card>
  );
};

export default List;
