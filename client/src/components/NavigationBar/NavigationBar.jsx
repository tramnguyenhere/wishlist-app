import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/features/userSlice';

import './navigationbar.scss';

function NavigationBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const logoutHandler = () => {
    dispatch(removeUser());
  };
  return (
    <Nav className='nav__wrapper'>
      <Nav.Link className='list__item' href='/'>
        HOMEPAGE
      </Nav.Link>
      <Nav.Link className='list__item' href='/instruction'>
        HOW TO USE
      </Nav.Link>
      {user ? (
        <Nav.Link className='list__item' onClick={logoutHandler} href='/'>
          LOGOUT
        </Nav.Link>
      ) : (
        <Nav.Link className='list__item' href='/login'>
          LOGIN
        </Nav.Link>
      )}
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
