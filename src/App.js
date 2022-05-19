import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="Hola Coders"/>
        <ItemCount stock={10}/>
    </div>
  );
}

export default App;
