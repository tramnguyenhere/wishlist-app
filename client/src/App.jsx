import React from 'react';

import Container from 'react-bootstrap/Container';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Container>
      <NavigationBar />
      <Home />
    </Container>
  );
};

export default App;
