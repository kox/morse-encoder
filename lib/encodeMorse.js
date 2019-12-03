const alphabet = require('./alphabet');

const encodeMorse = function encodeMorse(message) {
  function encodeLetter(letter) {
    if (!letter.match(/[a-zA-Z0-1]/)) {
      throw new Error('Wrong letter detected! ', letter);
    }
    return alphabet[letter.toLowerCase()];
  }

  function encodeWord(word) {
    return word
      .split('')
      .map(encodeLetter)
      .join('|');
  }

  function encodeSentence(sentence) {
    return sentence
      .split(' ')
      .map(encodeWord)
      .join(alphabet.space);
  }

  function encodeComas(comas) {
    return comas
      .split(',')
      .map(encodeSentence)
      .join(alphabet[',']);
  }
  function encodeDots(dots) {
    return dots
      .split('.')
      .map(encodeComas)
      .join(alphabet['.']);
  }

  return encodeDots(message);
};

module.exports = encodeMorse;
