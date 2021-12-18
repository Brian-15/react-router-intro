import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

const VendingMachine = ({ snacks }) => {
  console.log(snacks);
  return (
    <ul key={uuid()}>
    {snacks.map(snack => (
      <li key={uuid()}>
        <Link key={uuid()} to={`/${snack}`}>{snack}</Link>
      </li>
    ))}
    </ul>
  );
};

export default VendingMachine;