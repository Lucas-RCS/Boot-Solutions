import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LoginRoute from './login';


const Routes = () => (
   <BrowserRouter>
      <LoginRoute />
   </BrowserRouter>
);

export default Routes;