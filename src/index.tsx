/***
 * @file index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import { ConfigProvider, theme } from 'antd';

const LS = require('local-storage');

const ColorSystem = () => {
  return LS.get("colorSistem");
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// teste sem o local storage
const color = () => {
  return "27, 154, 170";
}

const style = {
  "--colorbg": color() /*ColorSystem() <- Papa mudar para LocalStorage é só mudar o color() para ColorSstem()*/,
} as React.CSSProperties;

root.render(
  <div style={style}>
    <ConfigProvider
      theme={{
        token: {
        },
        algorithm: theme.darkAlgorithm,
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
            colorBgContainer: "white",
            colorTextPlaceholder: "#ccc",
          },
          Table: {
            colorBorder: "rgb(var(--colorbg))",
            colorText: "#f8f9fc",
            colorTextHeading: "#f8f9fc",
            colorBgContainer: "#141415",
          },
          Pagination: {
            colorPrimary: "rgb(var(--colorbg))",
            colorPrimaryHover: "rgba(var(--colorbg),0.8)",
            colorBgContainer: "#242524",
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