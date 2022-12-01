import React from 'react';
import wishlistService from '../../services/wishlist';
import { createWishItem } from '../../redux/features/wishlistSlice';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './home.scss';

import List from '../../components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addWishItem = (event) => {
    event.preventDefault();
    const item = event.target.wishItem.value;
    wishlistService
      .createNew(item)
      .then((response) => dispatch(createWishItem(response)));
  };

  if (user)
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
            onClick={() => navigate('/wishes/:id')}
          />
        </Row>
      </Container>
    );
  else
    return (
      <Container className='home'>
        <Row>
          <List icon='fa-solid fa-gift' />
        </Row>
      </Container>
    );
};

export default Home;
