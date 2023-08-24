import { ParserPipe } from '../interfaces/parser-pipe.interface';

/**
 * Align the first semicolon of given words to the middle of the sentence if possible.
 *
 * @example
 * // returns 'Nama                     : Nama Saya'
 * alignSemiColonToMiddle('Nama: Nama Saya');
 *
 * @param words The input string contains the words to be transformed.
 * @returns A string after performing a transformation on the input word.
 */
export const alignSemiColonToMiddle: ParserPipe = (words: string) => {
  if (words.includes(':') === false) {
    return words;
  }

  const splitByFirstSemiColonRegexp = new RegExp(/:(.*)/s);
  const [key, value] = words.split(splitByFirstSemiColonRegexp);
  const keyWithWhitespace = `${key}${' '.repeat(25 - key.length)}`;

  return `${keyWithWhitespace}:${value}`;
};
