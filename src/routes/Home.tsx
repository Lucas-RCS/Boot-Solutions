import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../views/pages/home/home';
import Dashboard from '../views/pages/dashboard/dashboard';
import Usuarios from '../views/pages/usuarios/usuarios';
import Graficos from '../views/pages/graficos/graficos';
import Arquivos from '../views/pages/arquivos/arquivos';
import Configuracoes from '../views/pages/configuracoes/configuracoes';



const HomeRout = () => (
   <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/graficos" element={<Graficos />} />
      <Route path="/arquivos" element={<Arquivos />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
      {/* <Route path="/notificações" element={<Notificações />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/favoritos" element={<Favorito />} />
      */}
   </Routes>

);

export default HomeRout;