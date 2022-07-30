import './App.css';
import Animal from './Animal';

function App() {
  let animales= [
    { id: 1, name: 'Fido 🐕' },
    { id: 2, name: 'Snowball 🐈' },
    { id: 3, name: 'Murph 🐈⬛' },
    { id: 4, name: 'Zelda 🐈' },
  ];
  return (
    <div className="App">
      <header>
        <h1>Ejercicio 2</h1>
      </header>
      {animales.map((animal) => (
        <Animal
          key={animal.id}
          animal={animal.name}
        />
      ))}
      
    </div>
  );
}

export default App;
