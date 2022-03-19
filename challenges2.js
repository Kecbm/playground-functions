// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0){
    return 'Vazio!';
  };

  let lista = [];
  let ordemAlfabetica = array.sort();

  for (let indice = 0; indice < ordemAlfabetica.length; indice = indice + 1){

    lista.push({
      tech: ordemAlfabetica[indice],
      name: name
    },);
    }

    return lista;
  }

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
const array = [lineA, lineB, lineC];
let resultado;

if (array[0] < array[1] + array[2] && array[0] > Math.abs(lineB - lineC)){
  resultado = true;
} else {
  resultado = false;
}

return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
