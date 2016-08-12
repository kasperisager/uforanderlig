import {head} from './head';

/**
 * Check if a list is empty.
 *
 * @example
 * const l1 = List.empty();
 * const l2 = List.add(1, l);
 * List.isEmpty(l1);
 * // => true
 * List.isEmpty(l2);
 * // => false
 *
 * @memberof List
 * @param {List} list
 * @return {Boolean}
 */
export function isEmpty(list) {
  return head(list) === null;
}
