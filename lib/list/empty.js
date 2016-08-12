import {List} from './data/list';
import {Leaf} from './data/leaf';

/**
 * Create an empty list.
 *
 * @example
 * const l = List.empty();
 *
 * @memberof List
 * @return {List}
 */
export function empty() {
  return new List(new Leaf());
}
