import {Tuple} from './data/tuple';

/**
 * Create a tuple of elements.
 *
 * @memberof Tuple
 * @param {...*} elements
 * @return {Tuple}
 */
export function of(...elements) {
  return new Tuple(elements);
}
