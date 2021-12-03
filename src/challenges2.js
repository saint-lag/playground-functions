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

// Desafio 11
function generatePhoneNumber(rawNumberArray) {
  // seu código aqui
  let isValid = false;
  let fullNumber = null;
  function isThisNumberValid(rawNumberArray) {
    if (rawNumberArray.length !== 11) {
      return ['Array com tamanho incorreto.', isValid];
    } else {
      // Current number counter
      let numberCounter = {};
      for (let number of rawNumberArray) {
        if (number < 0 || number > 9) {
          return [
            'não é possível gerar um número de telefone com esses valores',
            isValid,
          ];
        } else if (numberCounter[number] >= 3) {
          return [
            'não é possível gerar um número de telefone com esses valores',
            isValid,
          ];
        } else if (numberCounter[number] > 0) {
          numberCounter[number] += 1;
        } else {
          numberCounter[number] = 1;
        }
      }
    }
    isValid = true;
    return [null, isValid];
  }
  function main() {
    const validation = isThisNumberValid(rawNumberArray);
    if (validation[1] !== true) {
      return validation[0];
    } else {
      let middleSliceComma = rawNumberArray.slice(2, 6).toString();
      let finalSliceComma = rawNumberArray.slice(7);
      let middleSlice = '';
      let finalSlice = '';
      for (index = 0; index <= middleSliceComma; index += 1) {
        if (middleSliceComma[index] !== ',') {
          middleSlice += middleSliceComma[index];
        }
      }
      for (index = 0; index <= finalSliceComma; index += 1) {
        if (finalSliceComma[index] !== ',') {
          finalSlice += finalSliceComma[index];
        }
      }

      fullNumber =
        '(' +
        rawNumberArray[0] +
        rawNumberArray[1] +
        ') ' +
        middleSlice +
        '-' +
        finalSlice;
      console.log(typeof middleSlice + ' ' + middleSlice);
    }
    return fullNumber;
  }
  main();
  return fullNumber;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(a, b, c) {
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
