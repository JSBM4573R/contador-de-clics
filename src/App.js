import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import jsbmLogo from './img/LogoJSBM.png';
import { useState } from 'react';

function App() {

  // Constante el cual contiene un arreglo que tiene dos valores el primero es el numero 
  // de clics que realiza el usuario y el segundo lo cambia.
  // Este arreglo va a retornar un hook useState el cual inicia el contador en 0
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    // Se usa la variable que cambia el estado y se le incluye el clic +1
    // Esto cambia el estado de numClics sumandole 1 cada vez que se haga un clic
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          className="logo"
          src={jsbmLogo}
          alt="Logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false} 
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
