import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../views/pages/home/home';


const HomeRout = () => (
   <Routes>
      <Route path="/home" element={<Home />} />
   </Routes>

);

export default HomeRout;