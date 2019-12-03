const LineByLine = require('n-readlines');

const filesFolder = './files/';

function readLines(filename) {
  const lines = [];

  try {
    const liner = new LineByLine([filesFolder, filename].join(''));
    let line = liner.next();

    while (line) {
      lines.push(line.toString('ascii'));
      line = liner.next();
    }
  } catch (err) {
    throw new Error('File not found. Check if exists in the "files" folder.');
  }

  return lines;
}

module.exports = readLines;
