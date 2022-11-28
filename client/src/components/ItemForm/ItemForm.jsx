import React from 'react';

import './itemform.scss';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';

import Btn from '../Button/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import wishlistService from '../../services/wishlist';
const ItemForm = () => {
  const dispatch = useDispatch();
  const itemId = useParams().id;
  const wishItems = useSelector((state) => state.wishlist.data);
  const selectedWishItem = wishItems.find((item) => item.id === itemId);

  const updateItem = (event) => {
    event.preventDefault();
    const photoItem = event.target.photoItem.value;
    const addressItem = event.target.addressItem.value;
    const toUpdateItem = wishlistService.update({
      id: itemId,
      available: selectedWishItem.available,
      imageUrl: photoItem || '',
      whereToBuy: addressItem,
    });
    console.log(toUpdateItem);
    dispatch(updateItem(toUpdateItem));
  };

  return (
    <Container className='card__wrapper item-form'>
      <Btn className='btn--exit' name={<i className='fa-solid fa-xmark'></i>} />
      <Form className='item-form__wrapper' onSubmit={updateItem}>
        <Form.Label className='item-form__header'>ADD YOUR WISH</Form.Label>
        <Form.Group>
          <Form.Label className='item-form__name-current'>
            {selectedWishItem?.name}
          </Form.Label>
        </Form.Group>
        <InputGroup className='item-form__input'>
          <Form.Label className='item-form__input--title'>
            Photo of item
          </Form.Label>
          <Form.Control
            className='item-form__input--upload'
            type='text'
            id='item-photo'
            placeholder='Paste the link of image address'
            name='photoItem'
          />
        </InputGroup>
        <InputGroup className='item-form__input'>
          <Form.Label className='item-form__input--title'>
            Where to buy
          </Form.Label>
          <Form.Control
            className='item-form__input--upload'
            placeholder='Paste the link address or online shop'
            name='addressItem'
          />
        </InputGroup>
        <Row className='btn--group'>
          <Btn name='SAVE' className='btn--save' type='submit' />
          <Btn name='DELETE' className='btn--delete' />
        </Row>
      </Form>
    </Container>
  );
};

export default ItemForm;
