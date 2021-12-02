// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  const split = sentence.split(' ');
  return split;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  const result = array[array.length - 1] + ', ' + array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestNum = array[0];
  let count = 0;
  for (let num of array) {
    if (num === highestNum) {
      count += 1;
    } else if (num > highestNum) {
      count = 1;
      highestNum = num;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // Possible results
  const mouseWins = 'os gatos trombam e o rato foge';
  const cat1Wins = 'cat1';
  const cat2Wins = 'cat2';

  // Distance between mouse and cat
  function catDistance(mouse, cat) {
    return Math.abs(mouse - cat);
  }

  const mouseToCat1 = catDistance(mouse, cat1);
  const mouseToCat2 = catDistance(mouse, cat2);

  // Cases
  if (mouseToCat1 === mouseToCat2) {
    return mouseWins;
  } else if (mouseToCat1 < mouseToCat2) {
    return cat1Wins;
  } else if (mouseToCat1 > mouseToCat2) {
    return cat2Wins;
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
