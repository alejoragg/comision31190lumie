import React, { useState } from 'react'
import './App.css';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import CountClass from './components/CountClass/CountClass';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Monstrar o no mostrar</button>
        <NavBar />
        { show ? <CountFunction /> : null }
        {/* <CountClass /> */}
        <ItemListContainer greeting="Hola Coders"/>
        <ItemCount />
    </div>
  );
}

export default App;
