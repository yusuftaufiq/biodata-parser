import { toTitleCase } from './to-title-case.pipe';

describe('toTitleCase', () => {
  it('should be able to convert words separated by whitespace to title case', () => {
    const words = 'hello world';

    const titleCased = toTitleCase(words);

    expect(titleCased).toBe('Hello World');
  });

  it('should be able to convert words separated by symbol to title case', () => {
    const words = 'hello(world';

    const titleCased = toTitleCase(words);

    expect(titleCased).toBe('Hello(World');
  });
});
