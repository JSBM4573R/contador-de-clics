import './App.css';
import Boton from './componentes/Boton';
import jsbmLogo from './img/LogoJSBM.png';

function App() {

  // Se define una funcion flecha la cual crea una funcion a la constante y lo que 
  // retorna es lo que sigue despues de la => dentro de { }
  const manejarClic = () => {
    console.log('Clic');
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
