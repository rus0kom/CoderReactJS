import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import CartWidget from '../src/componentes/CartWidget';
import ItemCount from './componentes/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <>
  <BrowserRouter>
  { <NavBar CartWidget={CartWidget}>
        <button>Boton 1</button>
        <button>Boton 2</button>
      </NavBar> }
      <ItemCount/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:name" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="*" element={
      <div style={{backgroundColor: "red"}}>
        <h1>ERROR 404 NOT FOUND</h1>
      </div> }/>
      
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
