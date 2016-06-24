import {Tuple} from './data/tuple';

/**
 * Create a tuple of elements.
 *
 * @example
 * const t = Tuple.of('foo', 'bar');
 * const [f, b] = t;
 * // f = 'foo', b = 'bar'
 *
 * @memberof Tuple
 * @param {...*} elements
 * @return {Tuple}
 */
export function of(...elements) {
  return new Tuple(elements);
}
