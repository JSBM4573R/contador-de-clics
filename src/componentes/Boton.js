import React from 'react';

// sintaxis de desestructuracion se refiere a la misma propiedad de entrada, 
// es decir un solo argumento de entrada y se asigna dentro de ({ })
function Boton({texto, esBotonDeClic, manejarClic}) {
    return(
        // Se incluye un operador ternario esBotonDeClic con un condicional de tipo boolean
        // Cual es el boton ? si es boton de clic asignele la clase 'boton-clic'
        // Si no es un boton de clic entonces asignele la clase 'boton-reiniciar'
        <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
                onClick={manejarClic}>
            {texto}
        </button>
    );
}

// Es encesario exportar el componente funcional
// Se usa un export por default, el cual solo permite exportar solo un elemento
export default Boton;