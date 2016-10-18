import {some} from './some';

/**
 * Check if a list includes an item.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.includes(2, l);
 * // => true
 *
 * @memberof List
 * @param {*} item
 * @param {List} list
 * @return {Boolean}
 */
export function includes(item, list) {
  return some(i => i === item, list);
}
