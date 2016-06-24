import {Map} from '..';

/**
 * Get the values of a set.
 *
 * @memberof Set
 * @param {Set} set
 * @return {List}
 */
export function values(set) {
  return Map.keys(set._map);
}
