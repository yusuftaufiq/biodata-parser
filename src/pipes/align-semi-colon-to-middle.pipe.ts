import { ParserPipe } from '../interfaces/parser-pipe.interface';

export const alignSemiColonToMiddle: ParserPipe = (words: string) => {
  if (words.includes(':') === false) {
    return words;
  }

  const splitByFirstSemiColonRegexp = new RegExp(/:(.*)/s);
  const [key, value] = words.split(splitByFirstSemiColonRegexp);
  const keyWithWhitespace = `${key}${' '.repeat(25 - key.length)}`;

  return `${keyWithWhitespace}:${value}`;
};
