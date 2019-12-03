const offuscateMorseCode = require('./offuscateMorse');

describe('Offuscate Morse Code function', () => {
  it('should offuscate a dot correctly', () => {
    const result = offuscateMorseCode('.');
    expect(result).toBe('1');
  });

  it('should offuscate two dots correctly', () => {
    const result = offuscateMorseCode('..');
    expect(result).toBe('2');
  });

  it('should offuscate five dots correctly', () => {
    const result = offuscateMorseCode('.....');
    expect(result).toBe('5');
  });

  it('should offuscate ten dots correctly', () => {
    const result = offuscateMorseCode('..........');
    expect(result).toBe('10');
  });

  it('should offuscate a dash correctly', () => {
    const result = offuscateMorseCode('-');
    expect(result).toBe('A');
  });

  it('should offuscate two dashes correctly', () => {
    const result = offuscateMorseCode('--');
    expect(result).toBe('B');
  });

  it('should offuscate five dashes correctly', () => {
    const result = offuscateMorseCode('-----');
    expect(result).toBe('E');
  });

  it('should offuscate ten dashes correctly', () => {
    const result = offuscateMorseCode('----------');
    expect(result).toBe('J');
  });

  it('should offuscate keeping pipes', () => {
    const result = offuscateMorseCode('.|-|.|-');
    expect(result).toBe('1|A|1|A');
  });

  it('should offuscate keeping slashes', () => {
    const result = offuscateMorseCode('.|-|.|-/.|-|.|-');
    expect(result).toBe('1|A|1|A/1|A|1|A');
  });

  it('should offuscate "Hello World" correctly', () => {
    const helloWorldMorse = '....|.|.-..|.-..|---/.--|---|.-.|.-..|-..';
    const result = offuscateMorseCode(helloWorldMorse);
    expect(result).toBe('4|1|1A2|1A2|C/1B|C|1A1|1A2|A2');
  });

  it('should offuscate "Hi, this is a test.Bye" correctly', () => {
    const helloWorldMorse =
      '....|..--..--/-|....|..|.../..|.../.-/-|.|...|-.-.-.-';
    const result = offuscateMorseCode(helloWorldMorse);
    expect(result).toBe('4|2B2B/A|4|2|3/2|3/1A/A|1|3|A1A1A1A');
  });

  it('should offuscate "Hi, John Doe.Bye" correctly', () => {
    const helloWorldMorse =
      '....|..--..--/.---|---|....|-./-..|---|..-.-.--...|-.--|.';
    const result = offuscateMorseCode(helloWorldMorse);
    expect(result).toBe('4|2B2B/1C|C|4|A1/A2|C|2A1A1B3|A1B|1');
  });
});
