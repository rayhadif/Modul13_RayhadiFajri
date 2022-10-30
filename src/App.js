import './App.css';
import React from 'react';
import Judul from './header/Judul/title';
import DarkExample from './body/table'
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <Judul />
      <DarkExample />
      <Footer />
    </div>
  );
}

export default App;
