import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './home.scss';

import Title from '../../components/Title/Title';
import List from '../../components/List/List';

const Home = () => {
  return (
    <Container className='home'>
      <Row>
        <Col>
          <Title />
        </Col>
      </Row>
      <Row>
        <Col>
          <List />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
