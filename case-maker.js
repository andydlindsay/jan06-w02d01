const caseMaker = (str) => {
  const returnArray = [];
  const wordArray = str
    .trim()
    .toLowerCase()
    .split(' ');
  returnArray.push(wordArray[0]);

  for (let i = 1; i < wordArray.length; i++) {
    const word = wordArray[i];
    const first = word[0].toUpperCase();
    const rest = word.slice(1);
    returnArray.push(`${first}${rest}`);
  }

  return returnArray.join('');
};

// module.exports.caseMaker = caseMaker;
// module.exports.caseMaker = percentEncoding;
module.exports = {
  caseMaker: caseMaker
};
