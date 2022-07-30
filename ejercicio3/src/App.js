import './App.css';
import React, { useState } from 'react';
import Contador from './Contador';

function App() {

  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Ejercicio 3</h1>
      </header>
      <Contador
        current={current}
        previous={previous}
        setCurrent={setCurrent}
        setPrevious={setPrevious}
      />
    </div>
  );
}

export default App;
