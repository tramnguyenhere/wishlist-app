import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeAvailableStatus } from '../../redux/features/wishlistSlice';

import './itemdetail.scss';
import { Container, Row, Col } from 'react-bootstrap';

import Btn from '../Button/Btn';

const ItemDetails = ({ setToggle, toggle, itemId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wishlist.wishlistItems);
  const selectedWishItem = wishItems.find((item) => item.id === itemId);

  const { name, whereToBuy, id, available, imageUrl } = selectedWishItem;
  console.log(selectedWishItem);
  return (
    <Container id={id} className='card__wrapper item-card__wrapper'>
      <Btn
        onClick={() => navigate('/')}
        className='btn--exit'
        name={<i className='fa-solid fa-xmark'></i>}
      />
      <Row>
        <Col xs={6} md={6} lg={6} className='item-photo__wrapper'>
          <span className='item-photo__frame'>
            <img src={imageUrl} alt='watch'></img>
          </span>
        </Col>
        <Col xs={6} md={6} lg={6} className='item-detail__wrapper'>
          <h1>{name}</h1>
          <Row className='btn__wrapper'>
            <a href={whereToBuy} target='_blank' rel='noreferrer'>
              <Btn id='btn--item-place' name='where to buy?' />
            </a>
            <Btn
              id='btn--item-delivery'
              name='how to send it to you?'
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <Btn
              disabled={!available}
              id='btn--item-confirmation'
              name='I had bought it for you!'
              onClick={() => {
                dispatch(changeAvailableStatus());
              }}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetails;
