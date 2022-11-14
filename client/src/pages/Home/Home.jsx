import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './home.scss';

import List from '../../components/List/List';

const Home = () => {
  return (
    <Container className='home'>
      <Row>
        <List icon='fa-solid fa-gift' item='Casio collection LTP-V001GL' />
      </Row>
    </Container>
  );
};

export default Home;
