/***
 * @file index.tsx
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

const style = {
  "--colorbg": readToken(),
  "::selection": {
    backgroundColor: "rgb(var(--colorbg))",
    color: "white"
  }
} as React.CSSProperties;

root.render(
  <div style={style}>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "rgb(var(--colorbg))",
            colorPrimaryHover: "rgba(var(--colorbg),0.5)",
            colorPrimaryActive: "rgba(var(--colorbg),0.2)",
          },
          Checkbox: {
            colorPrimary: "rgb(var(--colorbg))",
            colorPrimaryHover: "rgba(var(--colorbg),0.5)",
          }
        },
      }}
    >
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </ConfigProvider>
  </div>
);

reportWebVitals();