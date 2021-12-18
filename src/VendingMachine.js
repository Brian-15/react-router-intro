import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Snack from './Snack.js';

const VendingMachine = ({ snacks=['soda', 'chips', 'water'] }) => {

  return (
    <>
      <BrowserRouter>
        <Route exact path='/'>
          <ul>
          {snacks.map(snack => (
            <li>
              <Link to={`/${snack}`}>{snack}</Link>
            </li>
          ))}
          </ul>
        </Route>
        {snacks.map(snack =>
        <Route exact path={`/${snack}`}>
          <Snack name={snack} />
        </Route>)}
      </BrowserRouter>
    </>
  );
};

export default VendingMachine;