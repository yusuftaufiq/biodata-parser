import { ParserPipe } from '../interfaces/parser-pipe.interface';

export const wordWrapValueAfterSemiColon: ParserPipe = (words: string) => {
  if (words.includes(':') === false) {
    return words;
  }

  const splitByFirstSemiColonRegexp = new RegExp(/:(.*)/s);
  const [key, value] = words.split(splitByFirstSemiColonRegexp);
  const splitEveryNthCharactersRegexp = new RegExp(
    `.{1,${process.stdout.columns - 2 - key.length}}`,
    'g',
  );
  const splittedValues = value.match(splitEveryNthCharactersRegexp);

  if (splittedValues === null) {
    return words;
  }

  const whitespace = ' '.repeat(key.length + 2);
  const wordWrappedValues = splittedValues
    .map((value, index) =>
      index >= 1 ? `${whitespace}${value.trim()}` : value,
    )
    .join('\n');

  return `${key}:${wordWrappedValues}`;
};
