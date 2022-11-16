import React from 'react';

import './itemdetail.scss';
import { Container, Row, Col } from 'react-bootstrap';

import Btn from '../Button/Btn';

const ItemDetails = () => {
  return (
    <Container className='card__wrapper item-card__wrapper'>
      <Btn className='btn--exit' name={<i class='fa-solid fa-xmark'></i>} />
      <Row>
        <Col className='item-photo__wrapper'>
          <span className='item-photo__frame'>
            <img
              src='https://img01.ztat.net/article/spp-media-p1/46907ad3ae793424b5d2f9a42085c3e5/d230a94ce881469e97f5a9ae6d64c161.jpg?imwidth=1800&filter=packshot'
              alt='watch'
            ></img>
          </span>
        </Col>
        <Col className='item-detail__wrapper'>
          <h1>Casio collection LTP-V001GL</h1>
          <Row className='btn__wrapper'>
            <Btn id='btn--item-place' name='where to buy?' />
            <Btn id='btn--item-delivery' name='how to send it to you?' />
            <Btn id='btn--item-confirmation' name='I had bought it for you!' />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetails;
