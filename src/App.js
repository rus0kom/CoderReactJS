import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import CartWidget from '../src/componentes/CartWidget'
import Title from './componentes/TitleClassComp';
import ClickTracker from './componentes/ItemCount';

function App() {
  return (
  <>
      { <NavBar CartWidget={CartWidget}>
        <button>Boton 1</button>
        <button>Boton 2</button>
      </NavBar> }
  <ItemListContainer greeting={"asd"}/>
  </>
  );
}

export default App;
