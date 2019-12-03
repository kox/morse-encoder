const alphabet = require('./alphabet');
const encodeMorse = require('./encodeMorse');

describe('Encode Morse function', () => {
  it('should encode "A" letter correctly', async () => {
    const result = await encodeMorse('A');
    expect(result).toBe(alphabet.a);
  });

  it('should encode "a" letter correctly', async () => {
    const result = await encodeMorse('a');
    expect(result).toBe(alphabet.a);
  });

  it('should encode "HELLO" letter correctly', async () => {
    const helloCode = '....|.|.-..|.-..|---';
    const result = await encodeMorse('hello');
    expect(result).toBe(helloCode);
  });

  it('should encode message with coma correctly', async () => {
    const message = 'Hi, my name is Inigo';
    const morseCode =
      '....|..--..--/--|-.--/-.|.-|--|./..|.../..|-.|..|--.|---';
    const result = await encodeMorse(message);
    expect(result).toBe(morseCode);
  });

  it('should encode message with full stop correctly', async () => {
    const message = 'Hi there.';
    const morseCode = '....|../-|....|.|.-.|..-.-.-';
    const result = await encodeMorse(message);
    expect(result).toBe(morseCode);
  });

  it('should throw an error if bad letter is sent', () => {
    const message = 'Wrong letter ñ';
    try {
      const result = encodeMorse(message);
    } catch (err) {
      expect(err.message).toContain('Wrong letter');
    }
  });
});
