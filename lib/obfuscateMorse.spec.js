const obfuscateMorseCode = require('./obfuscateMorse');

describe('Obfuscate Morse Code function', () => {
  it('should obfuscate a dot correctly', () => {
    const result = obfuscateMorseCode('.');
    expect(result).toBe('1');
  });

  it('should obfuscate two dots correctly', () => {
    const result = obfuscateMorseCode('..');
    expect(result).toBe('2');
  });

  it('should obfuscate five dots correctly', () => {
    const result = obfuscateMorseCode('.....');
    expect(result).toBe('5');
  });

  it('should obfuscate ten dots correctly', () => {
    const result = obfuscateMorseCode('..........');
    expect(result).toBe('10');
  });

  it('should obfuscate a dash correctly', () => {
    const result = obfuscateMorseCode('-');
    expect(result).toBe('A');
  });

  it('should obfuscate two dashes correctly', () => {
    const result = obfuscateMorseCode('--');
    expect(result).toBe('B');
  });

  it('should obfuscate five dashes correctly', () => {
    const result = obfuscateMorseCode('-----');
    expect(result).toBe('E');
  });

  it('should obfuscate ten dashes correctly', () => {
    const result = obfuscateMorseCode('----------');
    expect(result).toBe('J');
  });

  it('should obfuscate keeping pipes', () => {
    const result = obfuscateMorseCode('.|-|.|-');
    expect(result).toBe('1|A|1|A');
  });

  it('should obfuscate keeping slashes', () => {
    const result = obfuscateMorseCode('.|-|.|-/.|-|.|-');
    expect(result).toBe('1|A|1|A/1|A|1|A');
  });

  it('should obfuscate "Hello World" correctly', () => {
    const helloWorldMorse = '....|.|.-..|.-..|---/.--|---|.-.|.-..|-..';
    const result = obfuscateMorseCode(helloWorldMorse);
    expect(result).toBe('4|1|1A2|1A2|C/1B|C|1A1|1A2|A2');
  });

  it('should obfuscate "Hi, this is a test.Bye" correctly', () => {
    const helloWorldMorse =
      '....|..--..--/-|....|..|.../..|.../.-/-|.|...|-.-.-.-';
    const result = obfuscateMorseCode(helloWorldMorse);
    expect(result).toBe('4|2B2B/A|4|2|3/2|3/1A/A|1|3|A1A1A1A');
  });

  it('should obfuscate "Hi, John Doe.Bye" correctly', () => {
    const helloWorldMorse =
      '....|..--..--/.---|---|....|-./-..|---|..-.-.--...|-.--|.';
    const result = obfuscateMorseCode(helloWorldMorse);
    expect(result).toBe('4|2B2B/1C|C|4|A1/A2|C|2A1A1B3|A1B|1');
  });
});
