import React, { useState } from 'react';

import { auth, signInWithEmailAndPassword } from '../../firebase';
import { setUser } from '../../redux/features/userSlice';

import './login.scss';
import { Container, Form, Row } from 'react-bootstrap';
import Btn from '../../components/Button/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => dispatch(setUser(res.user)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

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
            <Form.Label className='login__form-label'>Email</Form.Label>
            <Form.Control
              className='login__form-input'
              type='text'
              placeholder='Enter username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Btn
            className='login__form-button'
            type='submit'
            name='Login'
            onClick={loginHandler}
          />
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
