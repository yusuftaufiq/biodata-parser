import { BIO_DATA_CONSTANT } from './constants/biodata.constant';
import { alignSemiColonToMiddle } from './pipes/align-semi-colon-to-middle.pipe';
import { toTitleCase } from './pipes/to-title-case.pipe';
import { wordWrapValueAfterSemiColon } from './pipes/word-wrap-value-after-semicolon.pipe';
import { pipe } from './utils/pipe.util';

const PIPELINES = pipe(
  toTitleCase,
  alignSemiColonToMiddle,
  wordWrapValueAfterSemiColon,
);

const main = () => {
  const output = BIO_DATA_CONSTANT.split('\n').map(PIPELINES).join('\n');

  console.info(output);
};
main();
