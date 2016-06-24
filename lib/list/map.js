import {add} from './add';
import {empty} from './empty';
import {fold} from './fold';

/**
 * Map over the items of a list.
 *
 * @memberof List
 * @param {Function} iteratee
 * @param {List} list
 * @return {List}
 */
export function map(iteratee, list) {
  return fold((l, i) => add(iteratee(i), l), empty(), list);
}
