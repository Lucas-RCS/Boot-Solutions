import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LoginRoute from './login';
import MainRout from './main';


const Routes = () => (
   <BrowserRouter>
      <LoginRoute />
      <MainRout />
   </BrowserRouter>
);

export default Routes;