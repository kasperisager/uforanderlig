import {List} from '..';
import {fold} from './fold';

/**
 * Reverse the items of a list.
 *
 * @memberof List
 * @param {List} list
 * @return {List}
 */
export function reverse(list) {
  return fold((l, i) => List.add(i, l), List.empty(), list);
}
