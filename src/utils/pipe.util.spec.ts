import { pipe } from './pipe.util';

describe('pipe', () => {
  it('should be able to transform data sequentially', () => {
    const double = (x: number) => x * 2;
    const reduce2 = (x: number) => x - 2;
    const doubleThenReduceBy2 = pipe(double, reduce2);

    const calculated = doubleThenReduceBy2(6);

    expect(calculated).toBe(10);
  });
});
