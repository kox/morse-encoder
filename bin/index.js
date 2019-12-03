#!/usr/bin/env node
const commander = require('commander');

const { version } = require('../package.json');
const encodeMorse = require('../lib/encodeMorse');
const offuscateMorse = require('../lib/offuscateMorse');
const printConsole = require('../lib/printConsole');
const readLines = require('../lib/readLines');

const program = new commander.Command();

printConsole.init();

let shouldOffuscate = false;

function encodeMessage(message) {
  printConsole.plainText(message);

  const encoded = encodeMorse(message);
  printConsole.morseCode(encoded);

  if (shouldOffuscate) {
    const offuscated = offuscateMorse(encoded);
    printConsole.offuscatedText(offuscated);
  }
}

function encodeFile(file) {
  printConsole.plainFilename(file);
  const lines = readLines(file);
  if (lines.length === 0) {
    throw new Error('The file was empty. No messages to be encoded.');
  }
  lines.map(encodeMessage, shouldOffuscate);
}

program
  .version(version, '-v, --version', 'output the current version')
  .option('-m, --message <message>', 'encode plain text')
  .option('-f, --file <file>', 'encode lines of text in file')
  .option('-o, --offuscate', 'offuscate morse code', false)
  .parse(process.argv);

printConsole.offuscateMode(program.offuscate);
shouldOffuscate = program.offuscate;

if (program.file) {
  encodeFile(program.file, program.offuscate);
}

if (program.message) {
  encodeMessage(program.message, program.offuscate);
}
