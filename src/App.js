import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />
      </header>
      
      <main>
        <ItemListContainer greeting="Bienvenido a Ohashi - Comida Japonesa" />
      </main>

    </div>
  );
}

export default App;
