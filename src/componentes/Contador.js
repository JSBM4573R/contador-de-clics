import React from "react";
import '../css/Contador.css'

// Se crea el componente funcional Contador el cual va a recibir unos argumentos por 
// medio de la sintaxis de desestructuracion dentro de ({ })
function Contador({ numClics }) {
  return(
    <div className='contador' >
      {numClics}
    </div>
  );
}

// Se exporta por dafult
export default Contador;