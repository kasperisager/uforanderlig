import {Map} from '..';

/**
 * Get the size of a set.
 *
 * @memberof Set
 * @param {Set} set
 * @return {Number}
 */
export function size(set) {
  return Map.size(set._m);
}
