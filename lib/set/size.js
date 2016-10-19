import {Map} from '..';

/**
 * Get the size of a set.
 *
 * @memberof Set
 * @param {Set} set
 * @return {Number}
 */
export function size(set) {
  const {map} = set;
  return Map.size(map);
}
