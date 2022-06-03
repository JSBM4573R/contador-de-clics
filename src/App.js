import './App.css';
//Se genera la importacion del logo primero definiendo un nombre y luego su carpeta de origen.
import jsbmLogo from './img/LogoJSBM.png';

function App() {
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          className="logo"
          //Dentro de corchetes se inserta el logo importado anteriormente
          //bajo el mismo nombre declarado. En este caso jsbmLogo
          src={jsbmLogo}
          alt="Logo" />
      </div>
      <div className="contenedor-principal">

      </div>
    </div>
  );
}

export default App;
