class ObfuscateMorse {
  constructor(message) {
    this.letters = message.trim().split('');
    this.obfuscated = [];
    this.letter = '';
    this.count = 0;
  }

  reset() {
    this.letter = '';
    this.count = 0;
  }

  register(letter) {
    this.letter = letter;
    this.count = 1;
  }

  save() {
    if (this.letter === '.') {
      this.obfuscated.push(this.count);
    } else if (this.letter === '-') {
      this.obfuscated.push(this.obfuscateDashes());
    }
  }

  obfuscateDashes() {
    return String.fromCharCode('A'.charCodeAt() + this.count - 1);
  }

  run() {
    for (let i = 0; i < this.letters.length; i += 1) {
      const letter = this.letters[i];
      if (letter === '|' || letter === '/') {
        this.save();
        this.obfuscated.push(letter);
        this.reset();
      } else if (this.letter !== letter) {
        if (this.count > 0) {
          this.save();
        }
        this.register(letter);
      } else {
        this.count += 1;
      }
    }
    if (this.letter) {
      this.save();
    }
    return this.obfuscated.join('');
  }
}

function obfuscateMorseCode(message) {
  const obfuscateMorse = new ObfuscateMorse(message);

  return obfuscateMorse.run();
}

module.exports = obfuscateMorseCode;
