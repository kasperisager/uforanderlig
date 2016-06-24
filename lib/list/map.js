import {add} from './add';
import {empty} from './empty';
import {fold} from './fold';

/**
 * Map over the items of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.map(i => i * 2, l);
 * // => List [ 2, 4, 6 ]
 *
 * @memberof List
 * @param {Function} iteratee
 * @param {List} list
 * @return {List}
 */
export function map(iteratee, list) {
  return fold((l, i) => add(iteratee(i), l), empty(), list);
}
