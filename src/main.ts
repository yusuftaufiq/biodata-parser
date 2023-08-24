import { BIO_DATA_CONSTANT } from './constants/biodata.constant';
import {
  LOWERCASE_SPECIAL_CHARACTERS,
  UPPERCASE_SPECIAL_CHARACTERS,
} from './constants/special-characters.constant';
import { adjustSpecialCharactersCase } from './pipes/adjust-special-characters-case';
import { alignSemiColonToMiddle } from './pipes/align-semi-colon-to-middle.pipe';
import { toTitleCase } from './pipes/to-title-case.pipe';
import { wordWrapValueAfterSemiColon } from './pipes/word-wrap-value-after-semicolon.pipe';
import { pipe } from './utils/pipe.util';

/**
 * The application's main entry point, all the executable
 * code is organized in the following function
 */
const main = () => {
  if (process.stdout.columns < 35) {
    console.error(
      `Your terminal's width is too small, please resize your terminal's width so that it becomes wider`,
    );

    return;
  }

  const pipelines = pipe(
    toTitleCase,
    adjustSpecialCharactersCase({
      lowerCaseSpecialCharacters: LOWERCASE_SPECIAL_CHARACTERS,
      upperCaseSpecialCharacters: UPPERCASE_SPECIAL_CHARACTERS,
    }),
    alignSemiColonToMiddle,
    wordWrapValueAfterSemiColon(process.stdout.columns),
  );

  const output = BIO_DATA_CONSTANT.split('\n').map(pipelines).join('\n');

  console.info(output);
};
main();
