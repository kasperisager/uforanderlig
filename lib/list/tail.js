import {List} from './data/list';

/**
 * Get the tail of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.tail(l);
 * // => List [ 2, 1 ]
 *
 * @memberof List
 * @param {List} list
 * @return {List}
 */
export function tail({head}) {
  return new List(head.next);
}
