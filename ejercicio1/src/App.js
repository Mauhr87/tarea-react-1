import './App.css';
import ButtonCarga from './ButtonCarga';

function App() {
  return (
    <div>
      <header>
        <h1>Ejercicio 1</h1>
      </header>
      <ButtonCarga 
        cargando={false}
      />
    </div>
  );
}

export default App;
