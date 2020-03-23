const objeto =  {};     // Creo objeto a exportar, es posible exportar funciones, contantes, etc.

function mensaje() {
    console.log("nodejs desde visual studio")
}

//exports.mesaje = mensaje;   // Exporta una propiedad de un objeto

objeto.mensaje = mensaje;   // Agrega las propiedades al objeto

module.exports = objeto;    // Exporta todo el objeto (con todas sus propiedades)