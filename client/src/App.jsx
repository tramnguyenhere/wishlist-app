import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setWishlist } from './redux/features/wishlistSlice';

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

const baseUrl = 'http://localhost:5000/api/wishlist';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        dispatch(setWishlist(response.data));
      })
      .catch((er) => {
        console.log(er);
      });
  }, [dispatch]);

  return (
    <Router>
      <Container>
        <NavigationBar />
        <Row>
          <Title />
        </Row>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path='/instruction' element={<Guideline />} />
          <Route path='/login' element={<Login />} />
          <Route path='/wishes/:id' element={<Details />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
