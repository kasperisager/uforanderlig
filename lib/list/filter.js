import {add} from './add';
import {empty} from './empty';
import {fold} from './fold';
import {reverse} from './reverse';

/**
 * Filter the items of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.filter(i => i % 2 !== 0, l);
 * // => List [ 3, 1 ]
 *
 * @memberof List
 * @param {Function} predicate
 * @param {List} list
 * @return {List}
 */
export function filter(predicate, list) {
  return reverse(fold((l, i) => predicate(i) ? add(i, l) : l, empty(), list));
}
