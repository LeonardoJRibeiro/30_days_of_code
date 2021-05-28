import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Global } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
}

export default App;
