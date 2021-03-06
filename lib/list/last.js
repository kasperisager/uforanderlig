import {reduce} from './reduce';

/**
 * Get the last item of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.last(l);
 * // => 1
 *
 * @memberof List
 * @param {List} list
 * @return {*}
 */
export function last(list) {
  return reduce((_, i) => i, list);
}
