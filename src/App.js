import React from 'react'
import './App.css';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <CountFunction />
        <ItemListContainer greeting="Hola Coders"/>
    </div>
  );
}

export default App;
