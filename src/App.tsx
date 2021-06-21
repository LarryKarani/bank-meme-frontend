import React, { FC } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import MainApp from './mainApp';

const App: FC = () => {
  return (
    <BrowserRouter>
        <Switch>
         <MainApp/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
