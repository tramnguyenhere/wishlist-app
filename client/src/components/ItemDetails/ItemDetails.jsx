import React from 'react';

import './itemdetail.scss';
import { Container, Row, Col } from 'react-bootstrap';

import Btn from '../Button/Btn';

const ItemDetails = () => {
  return (
    <Container className='card__wrapper item-card__wrapper'>
      <Btn className='btn--exit' name={<i class='fa-solid fa-xmark'></i>} />
      <Row>
        <Col>
          <span className='item-photo__frame'></span>
        </Col>
        <Col>
          <h1>Casio collection LTP-V001GL</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetails;
