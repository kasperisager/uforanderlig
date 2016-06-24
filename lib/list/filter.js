import {add} from './add';
import {empty} from './empty';
import {fold} from './fold';
import {reverse} from './reverse';

/**
 * Filter the items of a list.
 *
 * @memberof List
 * @param {Function} predicate
 * @param {List} list
 * @return {List}
 */
export function filter(predicate, list) {
  return reverse(fold((l, i) => predicate(i) ? add(i, l) : l, empty(), list));
}
