import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import ItemForm from './components/ItemForm/ItemForm';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Title from './components/Title/Title';

// import Details from './pages/Details/Details';
// import Guideline from './pages/Guideline/Guideline';
// import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';
// import UserHome from './pages/UserHome/UserHome';

const App = () => {
  return (
    <Container>
      <NavigationBar />
      <Row>
        <Title />
      </Row>
      {/* <Home /> */}
      {/* <UserHome /> */}
      {/* <Login /> */}
      {/* <Guideline /> */}
      {/* <Details /> */}
      <ItemForm />
      <Footer />
    </Container>
  );
};

export default App;
