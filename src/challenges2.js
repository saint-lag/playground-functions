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
        } else if (numberCounter[number] >= 2) {
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
      let middleSliceComma = rawNumberArray.slice(2, 7).toString();
      let finalSliceComma = rawNumberArray.slice(7).toString();
      let middleSlice = middleSliceComma.replace(/[^0-9]/g, '').split(',');
      let finalSlice = finalSliceComma.replace(/[^0-9]/g, '').split(',');

      fullNumber =
        '(' +
        rawNumberArray[0] +
        rawNumberArray[1] +
        ') ' +
        middleSlice +
        '-' +
        finalSlice;

      return fullNumber;
    }
  }
  fullNumber = main();
  return fullNumber;
}

// Desafio 12
function triangleCheck(a, b, c) {
  // seu código aqui

  const lines = [a, b, c];
  function add(accumulator, a) {
    return accumulator + a;
  }

  function sub(array) {
    return Math.abs(array[0] - array[1]);
  }

  for (index = 0; index < lines.length; index += 1) {
    let currentLines = [...lines];
    let currentLine = lines[index];
    let exceptCurrentLine = currentLines.splice(index, 1);

    const sumOtherLines = currentLines.reduce(add, 0);
    const absOtherLines = sub(currentLines);

    if (currentLine > sumOtherLines || currentLine < absOtherLines) {
      return false;
    }
  }
  return true;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  drinks = drinks.replace(/[^0-9]/g, '');
  drinks = drinks.split('');
  let drinksQuantity = [];
  for (let i of drinks) {
    i = parseInt(i);
    drinksQuantity.push(i);
  }

  function add(accumulator, a) {
    return accumulator + a;
  }

  const waterGlasses = drinksQuantity.reduce(add, 0);

  if (waterGlasses > 1) {
    return waterGlasses + ' copos de água';
  } else {
    return '1 copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
