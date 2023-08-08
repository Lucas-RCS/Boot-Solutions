/***
 * @file index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import { ConfigProvider } from 'antd';

const LS = require('local-storage');

const ColorSystem = () => {
  return LS.get("colorSistem");
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const style = {
  "--colorbg": ColorSystem()
} as React.CSSProperties;

root.render(
  <div style={style}>
    <ConfigProvider
      theme={{
        token: {
        },
        components: {
          Button: {
            colorPrimary: "rgb(var(--colorbg))",
            colorPrimaryHover: "rgba(var(--colorbg),0.5)",
            colorPrimaryActive: "rgba(var(--colorbg),0.2)",
          },
          Checkbox: {
            colorPrimary: "rgb(var(--colorbg))",
            colorPrimaryHover: "rgba(var(--colorbg),0.5)",
          },
          Input: {
            colorBorder: "rgb(var(--colorbg))",
          },
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