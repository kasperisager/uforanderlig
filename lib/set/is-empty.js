import {Map} from '..';

/**
 * Check if a set is empty.
 *
 * @memberof Set
 * @param {Set} set
 * @return {Boolean}
 */
export function isEmpty(set) {
  return Map.isEmpty(set._m);
}
