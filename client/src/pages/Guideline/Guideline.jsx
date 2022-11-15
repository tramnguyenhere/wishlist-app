import React from 'react';

import './guideline.scss';
import { Container } from 'react-bootstrap';

const Guideline = () => {
  return (
    <Container className='card__wrapper guideline'>
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
        for the owner of the list. <br />
        When clicking in the suggestion or the present icon, the detail of the
        item will appear with
        <ul>
          <li>
            places where you could buy the gift how to send to the receiver if
            you cannot bring it yourself and in case you bought the gift, please
            mark the confirm button so as it wouldn’t be bought by others
          </li>
        </ul>
        <p>
          in the current time, the login function is only available for Tram
          Nguyen, if you want to have your own version of the list, please wait
          for further update ♡
        </p>
      </p>
    </Container>
  );
};

export default Guideline;
