const path = require('path');
const { exec } = require('child_process');

const { version } = require('../package.json');

describe('The morse encoder command', () => {
  it('should have the same version as in packages.json', async () => {
    const result = await cli(['-v'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain(version);
  });

  it('should help with the list of commands', async () => {
    const result = await cli(['-h'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain('-h');
    expect(result.stdout).toContain('--help');
    expect(result.stdout).toContain('-m');
    expect(result.stdout).toContain('--message');
    expect(result.stdout).toContain('-f');
    expect(result.stdout).toContain('--file');
    expect(result.stdout).toContain('-o');
    expect(result.stdout).toContain('--obfuscate');
  });

  it('should render if obfuscate mode is active ', async () => {
    const result = await cli(['-o'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain('ON');
  });

  it('should show if obfuscate mode is active ', async () => {
    const result = await cli(['-o'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain('ON');
  });

  it('should show if obfuscate mode is not active ', async () => {
    const result = await cli([''], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain('OFF');
  });

  it('should encode "HELLO" message correctly ', async () => {
    const morseCode = '....|.|.-..|.-..|---';
    const result = await cli(['-m HELLO'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain(morseCode);
  });

  it('should encode "I AM IN TROUBLE" message correctly ', async () => {
    const morseCode = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';
    const result = await cli(['-m "I AM IN TROUBLE"'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain(morseCode);
  });

  it('should obfuscate "I AM IN TROUBLE" message correctly ', async () => {
    const obfuscateCode = '2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1';
    const result = await cli(['-m "I AM IN TROUBLE" -o'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain(obfuscateCode);
  });

  it('should encode "sample.txt" file correctly ', async () => {
    const helloMorseCode = '....|.|.-..|.-..|---';
    const iamtroubleMorseCode = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';
    const result = await cli(['-f sample.txt'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain(helloMorseCode);
    expect(result.stdout).toContain(iamtroubleMorseCode);
  });

  it('should obfuscate "sample.txt" file correctly ', async () => {
    const helloObfuscateCode = '4|1|1A2|1A2|C';
    const iamtroubleObfuscateCode = '2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1';
    const result = await cli(['-f sample.txt -o'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain(helloObfuscateCode);
    expect(result.stdout).toContain(iamtroubleObfuscateCode);
  });

  it('should encode "sample.txt" file correctly ', async () => {
    const helloMorseCode = '....|.|.-..|.-..|---';
    const iamtroubleMorseCode = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';
    const result = await cli(['-f sample.txt'], '.');
    expect(result.code).toBe(0);
    expect(result.stdout).toContain(helloMorseCode);
    expect(result.stdout).toContain(iamtroubleMorseCode);
  });

  it('should show error when empty', async () => {
    const result = await cli(['-f sampleEmpty.txt'], '.');
    expect(result.code).toBe(1);
    expect(result.stderr).toContain('The file was empty');
  });

  it('should show error wrong letter when loading sampleError1.txt', async () => {
    const result = await cli(['-f sampleError1.txt'], '.');
    expect(result.code).toBe(1);
    expect(result.stderr).toContain('Wrong letter detected!');
  });

  it('should show error wrong letter when loading sampleError2.txt', async () => {
    const result = await cli(['-f sampleError1.txt'], '.');
    expect(result.code).toBe(1);
    expect(result.stderr).toContain('Wrong letter detected!');
  });
});

function cli(args, cwd) {
  return new Promise(resolve => {
    exec(
      `node ${path.resolve('./bin/index')} ${args.join(' ')}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr,
        });
      }
    );
  });
}
