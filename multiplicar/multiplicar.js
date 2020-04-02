// Requires
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
  for(let i = 1; i <= limite; i++){
    console.log(`${ base } * ${ i } = ${ base * i}`);
  }
}

let crearArchivo = (base, limite) => {

  return new Promise((resolve, reject) => {

    if(!Number(base)){
      reject(`El valor introducido ${ base }, no es un numero`);
      return;
    }

    let data = '';

    for(let i = 1; i <= limite; i++){
      multiplicacion = base * i;
      data += `${ base } * ${ i } = ${ multiplicacion }\n`;
    }

    fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
      if (err)
        reject(err)
      else
        resolve(`tabla-${ base }-al-${ limite }.txt`);
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla
}
