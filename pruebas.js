//Verificar que los ultimos 3 numeros son digitos

const cadena = "nrsoa12a";
const dor = cadena.slice(-1);

let dos = cadena.slice(-2);

contar_numeros = cadena.replace(/[^0-9]/g, "");

prue = () => {
  if (dos === contar_numeros) {
    return dos;
  } else {
    return null;
  }
};

console.log("fin", prue());
