import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Main from '../views/pages/home/home';


const MainRout = () => (
   <Routes>
      <Route path="/home" element={<Main />} />
   </Routes>

);

export default MainRout;