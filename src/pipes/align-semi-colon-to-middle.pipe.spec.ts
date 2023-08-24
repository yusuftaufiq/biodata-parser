import { alignSemiColonToMiddle } from './align-semi-colon-to-middle.pipe';

describe('alignSemiColonToMiddle', () => {
  it('should be able to align semicolon to middle of the sentence', () => {
    const words = 'Name: Jojo';

    const aligned = alignSemiColonToMiddle(words);

    expect(aligned).toBe('Name                     : Jojo');
  });

  it('should be able to skip the transformation if the words do not contain semicolons', () => {
    const words = 'Jojo';

    const aligned = alignSemiColonToMiddle(words);

    expect(aligned).toBe('Jojo');
  });
});
