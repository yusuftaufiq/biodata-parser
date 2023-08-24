/**
 * Contract between data parser and pipeline utility.
 *
 * @param words The input string contains the words to be transformed.
 * @returns A string after performing a transformation on the input word.
 */
export interface ParserPipe {
  (words: string): string;
}
