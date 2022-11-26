import React, { useEffect } from 'react';

import './userhome.scss';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

import List from '../../components/List/List';
import { useDispatch } from 'react-redux';
import wishlistService from '../../services/wishlist';
import { createWishItem } from '../../redux/features/wishlistSlice';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addWishItem = async (event) => {
    event.preventDefault();
    const item = event.target.wishItem.value;
    const newWishItem = await wishlistService.createNew(item);
    dispatch(createWishItem(newWishItem));
  };

  useEffect(() => {}, []);

  return (
    <Container className='user_home'>
      <Row>
        <Form onSubmit={addWishItem}>
          <InputGroup className='user_home__input'>
            <InputGroup.Text id='new_item'>
              <Form.Control
                id='input--add-new'
                placeholder='Make a wish...'
                aria-label='Make a wish...'
                type='text'
                name='wishItem'
              />
              <Button type='submit' id='button--add-new'>
                ADD
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Row>
      <Row>
        <List
          icon='fa-solid fa-pen-to-square'
          onClick={() => navigate('/user/wishes/:id')}
          user={true}
        />
      </Row>
    </Container>
  );
};

export default UserHome;
