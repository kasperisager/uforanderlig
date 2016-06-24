import {fold} from './fold';
import {head} from './head';
import {tail} from './tail';

/**
 * Reduce a list to a single value.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.reduce((s, i) => s + i, l);
 * // => 6
 *
 * @memberof List
 * @param {Function} iteratee
 * @param {List} list
 * @return {*}
 */
export function reduce(iteratee, list) {
  return fold(iteratee, head(list), tail(list));
}
