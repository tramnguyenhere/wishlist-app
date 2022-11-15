import React from 'react';

import './userhome.scss';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

import List from '../../components/List/List';

const UserHome = () => {
  return (
    <Container className='user_home'>
      <Row>
        <InputGroup className='user_home__input'>
          <InputGroup.Text id='new_item'>
            <Form.Control
              id='input--add-new'
              placeholder='Make a wish...'
              aria-label='Make a wish...'
              type='text'
            />
            <Button id='button--add-new'>ADD</Button>
          </InputGroup.Text>
        </InputGroup>
      </Row>
      <Row>
        <List
          icon='fa-solid fa-pen-to-square'
          item='Casio collection LTP-V001GL'
        />
      </Row>
    </Container>
  );
};

export default UserHome;
