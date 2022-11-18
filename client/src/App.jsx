import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Container, Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
// import ItemForm from './components/ItemForm/ItemForm';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Title from './components/Title/Title';

import Details from './pages/Details/Details';
import Guideline from './pages/Guideline/Guideline';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
// import UserHome from './pages/UserHome/UserHome';

const App = () => {
  return (
    <Router>
      <Container>
        <NavigationBar />
        <Row>
          <Title />
        </Row>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/instruction' element={<Guideline />} />
          <Route path='/login' element={<Login />} />
          <Route path='/item/1' element={<Details />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
