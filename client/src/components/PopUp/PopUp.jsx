import React from 'react';

import './popup.scss';

const PopUp = ({ noti, classname }) => {
  return <div className={classname}>{noti}</div>;
};

export default PopUp;
