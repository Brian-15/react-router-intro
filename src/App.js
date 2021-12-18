import './App.css';
import { v4 as uuid } from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom';
import Snack from './Snack.js'
import VendingMachine from './VendingMachine';

function App({ snacks=['soda', 'chips', 'water'] }) {
  return (
    <BrowserRouter>
      <Route key={uuid()} exact path='/'>
        <VendingMachine snacks={snacks} />
      </Route>
      {snacks.map(snack =>
      <Route key={uuid()} exact path={`/${snack}`}>
        <Snack key={uuid()} name={snack} />
      </Route>)}
    </BrowserRouter>
  );
};

export default App;
