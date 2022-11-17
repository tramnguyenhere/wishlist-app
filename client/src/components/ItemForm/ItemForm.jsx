import React from 'react';

import './itemform.scss';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';

import Btn from '../Button/Btn';

const ItemForm = () => {
  return (
    <Container className='card__wrapper item-form'>
      <Btn className='btn--exit' name={<i class='fa-solid fa-xmark'></i>} />
      <Form className='item-form__wrapper'>
        <Form.Label className='item-form__header'>ADD YOUR WISH</Form.Label>
        <InputGroup className='item-form__input'>
          <Form.Label className='item-form__input--title'>
            Name of item
          </Form.Label>
          <Form.Control
            className='item-form__input--upload'
            placeholder='Type the item here'
          />
        </InputGroup>
        <InputGroup className='item-form__input'>
          <Form.Label className='item-form__input--title'>
            Photo of item
          </Form.Label>
          <Form.Control
            className='item-form__input--upload'
            type='file'
            id='item-photo'
          />
        </InputGroup>
        <InputGroup className='item-form__input'>
          <Form.Label className='item-form__input--title'>
            Where to buy
          </Form.Label>
          <Form.Control
            className='item-form__input--upload'
            placeholder='Paste the link address or online shop'
          />
        </InputGroup>
        <Row className='btn--group'>
          <Btn name='SAVE' className='btn--save' />
          <Btn name='DELETE' className='btn--delete' />
        </Row>
      </Form>
    </Container>
  );
};

export default ItemForm;
