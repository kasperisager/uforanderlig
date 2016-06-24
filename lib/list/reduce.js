import {fold} from './fold';
import {head} from './head';
import {tail} from './tail';

/**
 * Reduce a list to a single value.
 *
 * @memberof List
 * @param {Function} iteratee
 * @param {List} list
 * @return {*}
 */
export function reduce(iteratee, list) {
  return fold(iteratee, head(list), tail(list));
}
