export type PipelineFunction<T> = (arg: T) => T;

/**
 * The pipe function takes a sequence of functions and returns a new function.
 * When the new function is called with an argument, the sequence of functions
 * are called in order, which each one receiving the return value of the
 * previous function.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#function_sequential_piping}
 */
export const pipe = <T>(...fns: PipelineFunction<T>[]): PipelineFunction<T> => {
  return (arg: T) => fns.reduce((prev, fn) => fn(prev), arg);
};
