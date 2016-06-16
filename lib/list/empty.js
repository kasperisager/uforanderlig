import {List} from './data/list';

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
  return new List();
}
