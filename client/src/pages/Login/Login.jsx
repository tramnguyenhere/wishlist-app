import React from 'react';

import './login.scss';
import { Container, Form, Row, Button } from 'react-bootstrap';
import Btn from '../../components/Button/Btn';

const Login = () => {
  return (
    <Container className='login'>
      <Row>
        <h1>LOGIN</h1>
      </Row>
      <Row>
        <Form>
          <Form.Group
            className='mb-3 login__form-group'
            controlId='formBasicEmail'
          >
            <Form.Label className='login__form-label'>Username</Form.Label>
            <Form.Control
              className='login__form-input'
              type='text'
              placeholder='Enter username'
            />
          </Form.Group>

          <Form.Group
            className='mb-3 login__form-group'
            controlId='formBasicPassword'
          >
            <Form.Label className='login__form-label'>Password</Form.Label>
            <Form.Control
              className='login__form-input'
              type='password'
              placeholder='Enter password'
            />
          </Form.Group>
          <Btn className='login__form-button' type='submit' name='Login' />
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
