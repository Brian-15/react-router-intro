import React from 'react';
import Link from 'react-router-dom';

const Snack = ({ name }) => {
  return (
    <li>
      <p><Link>{name}</Link></p>
    </li>
  );
};

export default Snack;