// Desafio 10
function techList(techs, name) {
  // seu código aqui
  techs = techs.sort();
  let listOfTech = [];
  if (techs.length === 0) {
    return 'Vazio!';
  } else {
    for (let tech of techs) {
      let currentObj = {
        tech: tech,
        name: name,
      };
      listOfTech.push(currentObj);
    }
  }
  return listOfTech;
}

techList(['HTML', 'CSS'], 'Lucas');

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
