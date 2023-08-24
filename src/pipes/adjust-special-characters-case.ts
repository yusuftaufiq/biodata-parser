import { ParserPipe } from '../interfaces/parser-pipe.interface';

interface Parameters {
  lowerCaseSpecialCharacters: string[];
  upperCaseSpecialCharacters: string[];
}

/**
 * Adjust special characters to uppercase or lowercase.
 *
 * @example
 * // returns 'PHP, GO, CSS, html, of'
 * adjustSpecialCharactersCase({
 *  lowerCaseSpecialCharacters: ['of'],
 *  upperCaseSpecialCharacters: ['PHP', 'GO', 'CSS'],
 * })('php, go, css, html, OF');
 *
 * @param words The input string contains the words to be transformed.
 * @returns A string after performing a transformation on the input word.
 */
export const adjustSpecialCharactersCase = ({
  lowerCaseSpecialCharacters,
  upperCaseSpecialCharacters,
}: Parameters): ParserPipe => {
  return (words: string) => {
    const matchLowerCaseSpecialCharactersRegexp = new RegExp(
      `\\b(${lowerCaseSpecialCharacters.join('|')})\\b`,
      'gi',
    );
    const matchUpperCasedSpecialCharactersRegexp = new RegExp(
      `\\b(${upperCaseSpecialCharacters.join('|')})\\b`,
      'gi',
    );

    return words
      .replace(matchLowerCaseSpecialCharactersRegexp, (v) => v.toLowerCase())
      .replace(matchUpperCasedSpecialCharactersRegexp, (v) => v.toUpperCase());
  };
};
