import React from 'react';
import { Container } from 'react-bootstrap';

import './popup.scss';

const PopUp = ({ noti, classname }) => {
  return <Container className={`card__wrapper ${classname}`}>{noti}</Container>;
};

export default PopUp;
