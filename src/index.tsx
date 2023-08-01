/**
 * @const Index
 * @autor PLusIntelligence
 * @description Page index.tsx
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import { ConfigProvider } from 'antd';
import Cookie from 'universal-cookie';

const cookie = new Cookie();

const readToken = () => {
  return cookie.get("colorSistem");
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


const style = { "--colorbg": readToken() } as React.CSSProperties;

root.render(
  <ConfigProvider
    theme={{
      components: {
        Button: {
          colorPrimary: readToken(),
          colorPrimaryHover: readToken() + "C1",
          colorPrimaryActive: readToken() + "7D",
        },
        Checkbox: {
          colorPrimary: readToken(),
          colorPrimaryHover: readToken() + "C1",
        }
      },
    }}
  >
    <div style={style}>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </div>
  </ConfigProvider>
);

reportWebVitals();