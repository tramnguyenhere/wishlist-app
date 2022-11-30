import React from 'react';

import './guideline.scss';
import { Container } from 'react-bootstrap';
import Btn from '../../components/Button/Btn';
import { useNavigate } from 'react-router-dom';

const Guideline = () => {
  const navigate = useNavigate();
  return (
    <Container className='card__wrapper guideline'>
      <Btn
        onClick={() => navigate('/')}
        className='btn--exit'
        name={<i className='fa-solid fa-xmark'></i>}
      />
      <h3>Description</h3>
      <p>
        Christmas is coming! Besides the excitement of family and friend
        gathering, gift preparation must make you have headache thinking what to
        buy for gifts. Therefore, a wishlist from your beloved ones might be an
        essential guideline!
      </p>
      <h3>Instruction</h3>
      <p>
        The list of gift suggestions is visible on the homepage. If there is any
        suggesstion being crossed, it means that someone had already bought it
        for the owner of the list.
      </p>
      <p>
        When clicking in the suggestion or the present icon, the detail of the
        item will appear with
      </p>
      <ul>
        <li>places where you could buy the gift</li>
        <li>how to send to the receiver if you cannot bring it yourself </li>
        <li>
          and in case you bought the gift, there is option to signal so as it
          wouldn’t be bought by others
        </li>
      </ul>
      {/* <p className='guideline--warning'>
        In the current time, the login function is only available for Tram
        Nguyen, if you want to have your own version of the list, please{' '}
        <a href='mailto:tramngoc1402@gmail.com?Subject=About%20your%20wishlist%21'>
          contact her ♡
        </a>
      </p> */}
    </Container>
  );
};

export default Guideline;
