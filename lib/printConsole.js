const C = require('colors');
const Console = require('console');

function init() {
  Console.info(C.blue('Morse Code CLI'));
}

function plainFilename(filename) {
  Console.info(C.white('Reading file: \t\t') + C.green(filename));
}

function plainText(text) {
  Console.info(C.white('Sentence: \t\t') + C.yellow(text));
}

function morseCode(code) {
  Console.info(C.white('Morse code: \t\t') + C.red(code));
}

function offuscateMode(offuscate) {
  const status = offuscate ? 'ON' : 'OFF';
  Console.info(C.white('Offuscate mode: \t') + C.green(status));
}

function offuscatedText(text) {
  Console.info(C.white('Obfuscated Morse Code: \t') + C.red(text));
}

exports.init = init;
exports.plainFilename = plainFilename;
exports.plainText = plainText;
exports.morseCode = morseCode;
exports.offuscateMode = offuscateMode;
exports.offuscatedText = offuscatedText;
