import { ParserPipe } from '../interfaces/parser-pipe.interface';

export const toTitleCase: ParserPipe = (words: string) => {
  return words
    .toLowerCase()
    .replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
};
