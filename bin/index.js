#!/usr/bin/env node
const commander = require('commander');

const { version } = require('../package.json');
const encodeMorse = require('../lib/encodeMorse');
const obfuscateMorse = require('../lib/obfuscateMorse');
const printConsole = require('../lib/printConsole');
const readLines = require('../lib/readLines');

const program = new commander.Command();

printConsole.init();

let shouldObfuscate = false;

function encodeMessage(message) {
  printConsole.plainText(message);

  const encoded = encodeMorse(message);
  printConsole.morseCode(encoded);

  if (shouldObfuscate) {
    const obfuscated = obfuscateMorse(encoded);
    printConsole.obfuscatedText(obfuscated);
  }
}

function encodeFile(file) {
  printConsole.plainFilename(file);
  const lines = readLines(file);
  if (lines.length === 0) {
    throw new Error('The file was empty. No messages to be encoded.');
  }
  lines.map(encodeMessage, shouldObfuscate);
}

program
  .version(version, '-v, --version', 'output the current version')
  .option('-m, --message <message>', 'encode plain text')
  .option('-f, --file <file>', 'encode lines of text in file')
  .option('-o, --obfuscate', 'obfuscate morse code', false)
  .parse(process.argv);

printConsole.obfuscateMode(program.obfuscate);
shouldObfuscate = program.obfuscate;

if (program.file) {
  encodeFile(program.file, program.obfuscate);
}

if (program.message) {
  encodeMessage(program.message, program.obfuscate);
}
