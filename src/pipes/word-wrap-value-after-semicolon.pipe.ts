import { ParserPipe } from '../interfaces/parser-pipe.interface';

/**
 * Wrap the words given after the semicolon based on the width of the terminal column.
 *
 * @example
 * // returns `
 * // Programming Languages    : Php, Go, Javascript, Sql, Python, Ruby, Css, Html,
 * //                            Framework Dll(Vue Js, Codeigniter, Ruby On Rails,
 * //                            Jquery, Bootstrap, Mysql, Wordpress) Google Servi
 * //                            ce(Firebase, Google Analytics, Bigquery) Vcs(Git,
 * //                            Gitlab)
 * // `
 * wordWrapValueAfterSemiColon('Programming Languages    : Php, Go, Javascript, Sql, Python, Ruby, Css, Html, Framework Dll(Vue Js, Codeigniter, Ruby On Rails, Jquery, Bootstrap, Mysql, Wordpress) Google Service(Firebase, Google Analytics, Bigquery) Vcs(Git, Gitlab)');
 *
 * @param words The input string contains the words to be transformed.
 * @returns A string after performing a transformation on the input word.
 */
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
