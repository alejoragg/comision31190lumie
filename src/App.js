import React, { useState } from 'react'
import './App.css';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [page, setPage] = useState('navbar')

  return (
    <div className="App">
      <div>
        <button onClick={() => setPage('navbar')}>navbar</button>
        <button onClick={() => setPage('count')}>count</button>
        <button onClick={() => setPage('list')}>list</button>
      </div>
        {page === 'navbar' && <NavBar />}
        {page === 'count' && <CountFunction />}
        {page === 'list' && <ItemListContainer greeting="Hola Coders"/>}

        <h1>Esto no se desmonta</h1>
    </div>
  );
}

export default App;
