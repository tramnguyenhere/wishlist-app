import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Title from './components/Title/Title';
// import Home from './pages/Home/Home';
import UserHome from './pages/UserHome/UserHome';

const App = () => {
  return (
    <Container>
      <NavigationBar />
      <Row>
        <Col>
          <Title />
        </Col>
      </Row>
      {/* <Home /> */}
      <UserHome />
      <Footer />
    </Container>
  );
};

export default App;
