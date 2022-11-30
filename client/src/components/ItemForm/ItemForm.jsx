import React, { useState } from 'react';

import './itemform.scss';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';

import Btn from '../Button/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  removeItem,
  updateItemDetails,
} from '../../redux/features/wishlistSlice';

const ItemForm = () => {
  const [photoItem, setPhotoItem] = useState('');
  const [whereToBuy, setWhereToBuy] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemId = useParams().id;
  const wishItems = useSelector((state) => state.wishlist.data);
  const selectedWishItem = wishItems.find((item) => item.id === itemId);

  const updateItem = (event) => {
    try {
      dispatch(
        updateItemDetails({
          id: itemId,
          available: selectedWishItem.available,
          imageUrl: photoItem || '',
          whereToBuy: whereToBuy || '',
        })
      );
      navigate('/user/homepage');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = (id) => {
    try {
      if (window.confirm('Delete this wish?')) {
        dispatch(removeItem(id));
        navigate('/user/homepage');
      }
    } catch (error) {
      console.log(error);
    }
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
            value={photoItem}
            onChange={(e) => setPhotoItem(e.target.value)}
          />
        </InputGroup>
        <InputGroup className='item-form__input'>
          <Form.Label className='item-form__input--title'>
            Where to buy
          </Form.Label>
          <Form.Control
            className='item-form__input--upload'
            placeholder='Paste the link address or online shop'
            value={whereToBuy}
            onChange={(e) => setWhereToBuy(e.target.value)}
          />
        </InputGroup>
        <Row className='btn--group'>
          <Btn name='SAVE' className='btn--save' type='submit' />
          <Btn
            name='DELETE'
            className='btn--delete'
            type='button'
            onClick={() => deleteItem(itemId)}
          />
        </Row>
      </Form>
    </Container>
  );
};

export default ItemForm;
