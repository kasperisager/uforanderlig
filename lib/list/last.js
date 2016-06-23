import {fold} from './fold';

/**
 * Get the last item of a list.
 *
 * @memberof List
 * @param {List} list
 * @return {*}
 */
export function last(list) {
  return fold((_, i) => i, null, list);
}
