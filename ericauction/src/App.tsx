import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistSell from './screens/RegistSell';
import HeaderBar from './headerbar/HeaderBar';
import Home from './screens/Home';

function App() {
  return (
    <div>
      <HeaderBar />
      <RegistSell/>
    </div>
    
  );
}

export default App;
