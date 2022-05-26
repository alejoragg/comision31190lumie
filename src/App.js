import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
// import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  const [page, setPage] = useState({ path: 'list', param: '1'})
  console.log(page)
  return (
    <div className="App">
        {/* <NavBar /> */}
        <div>
          <button onClick={() => setPage({...page, path: 'list'})}>Lista</button>
          {/* <button onClick={() => setPage('detail')}>Detalle</button> */}
        </div>
        {page.path === 'list' && <ItemListContainer greeting="Hola Coders" handlePage={setPage}/>}
        {page.path === 'detail' && <ItemDetailContainer id={page.param}/>}
        {/* <ItemCount stock={10}/>
        <MercadoLibre /> */}
    </div>
  );
}

export default App;
