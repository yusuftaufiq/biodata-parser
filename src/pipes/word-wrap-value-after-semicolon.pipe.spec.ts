import { wordWrapValueAfterSemiColon } from './word-wrap-value-after-semicolon.pipe';

describe('wordWrapValueAfterSemiColon', () => {
  it('should be able to word wrap given words to 70 columns width', () => {
    const words =
      'Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum provident impedit incidunt tempore pariatur, atque iusto, ipsum id, soluta laudantium enim? Eveniet, hic nam. Dignissimos non facilis explicabo vero minima?';

    const wordWrapped = wordWrapValueAfterSemiColon(70)(words);

    expect(wordWrapped)
      .toBe(`Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit
             . Illum provident impedit incidunt tempore pariatur, atqu
             e iusto, ipsum id, soluta laudantium enim? Eveniet, hic n
             am. Dignissimos non facilis explicabo vero minima?`);
  });

  it('should be able to skip the transformation if the words do not contain semicolons', () => {
    const words = 'Hello World';

    const wordWrapped = wordWrapValueAfterSemiColon(70)(words);

    expect(wordWrapped).toBe('Hello World');
  });
});
