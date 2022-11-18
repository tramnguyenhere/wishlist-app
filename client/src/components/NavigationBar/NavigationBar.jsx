import Nav from 'react-bootstrap/Nav';

import './navigationbar.scss';

function NavigationBar() {
  return (
    <Nav className='nav__wrapper'>
      <Nav.Link className='list__item' href='/home'>
        HOMEPAGE
      </Nav.Link>
      <Nav.Link className='list__item' href='/instruction'>
        HOW TO USE
      </Nav.Link>
      <Nav.Link className='list__item' href='/login'>
        LOGIN
      </Nav.Link>
      <Nav.Link
        className='list__item'
        href='mailto:tramngoc1402@gmail.com?Subject=About%20your%20wishlist%21'
      >
        CONTACT ME
      </Nav.Link>
    </Nav>
  );
}

export default NavigationBar;
