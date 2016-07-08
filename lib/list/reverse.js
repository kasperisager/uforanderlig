import {add} from './add';
import {empty} from './empty';
import {fold} from './fold';

/**
 * Reverse the items of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.reverse(l);
 * // => List [ 1, 2, 3 ]
 *
 * @memberof List
 * @param {List} list
 * @return {List}
 */
export function reverse(list) {
  return fold((l, i) => add(i, l), empty(), list);
}
