import React from 'react';
// components
import Main from './components/modules/Main/Main';
import Header from './components/partials/Header/Header';
// assets
import logo from './assets/images/logo.png';
import './App.css';

function App() {
  return (
    <div>
      <Header logo={logo} />
      <Main />
    </div>
  );
}

export default App;
