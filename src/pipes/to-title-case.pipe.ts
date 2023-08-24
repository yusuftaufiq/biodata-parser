import { ParserPipe } from '../interfaces/parser-pipe.interface';

/**
 * Transform the given words to the title case format.
 *
 * @example
 * // returns 'NAMA SAYA'
 * toTitleCase('Nama Saya');
 *
 * @param words The input string contains the words to be transformed.
 * @returns A string after performing a transformation on the input word.
 */
export const toTitleCase: ParserPipe = (words: string) => {
  return words
    .toLowerCase()
    .replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
};
