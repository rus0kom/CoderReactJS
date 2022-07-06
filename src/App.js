import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
  <>
  <NavBar/>;
  <ItemListContainer greeting={"asd"}/>
  </>
  );
}

export default App;
