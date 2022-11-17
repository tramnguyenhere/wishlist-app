import React from 'react';
import { Container } from 'react-bootstrap';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import PopUp from '../../components/PopUp/PopUp';

const Details = () => {
  return (
    <Container>
      <ItemDetails />
      <PopUp
        noti='If you want to the send me the gift by post, please text me via social media or email for the address 😁'
        classname='item-detail__noti'
      />
    </Container>
  );
};

export default Details;
