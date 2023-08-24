import { adjustSpecialCharactersCase } from './adjust-special-characters-case';

describe('adjustSpecialCharactersCase', () => {
  it('should be able to adjust given words to lower case', () => {
    const words = 'HELLO WORLD PHP';
    const lowerCaseChars = ['world', 'hello'];

    const transformedCase = adjustSpecialCharactersCase({
      lowerCaseSpecialCharacters: lowerCaseChars,
      upperCaseSpecialCharacters: [],
    })(words);

    expect(transformedCase).toBe('hello world PHP');
  });

  it('should be able to adjust given words to upper case', () => {
    const words = 'hello world php';
    const upperCaseChars = ['php'];

    const transformedCase = adjustSpecialCharactersCase({
      lowerCaseSpecialCharacters: [],
      upperCaseSpecialCharacters: upperCaseChars,
    })(words);

    expect(transformedCase).toBe('hello world PHP');
  });
});
