import React from 'react';
import Link from 'react-router-dom';

const Snack = ({ name }) => {
  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
      <p>{ name }</p>
    </>
  );
};

export default Snack;