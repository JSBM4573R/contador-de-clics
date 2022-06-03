import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import jsbmLogo from './img/LogoJSBM.png';

function App() {

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
        {/* Se incluye el componente contador de clics */}
        <Contador numClics='3' />
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
