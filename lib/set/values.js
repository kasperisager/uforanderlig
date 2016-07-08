import {Map} from '..';

/**
 * Get the values of a set.
 *
 * @memberof Set
 * @param {Set} set
 * @return {List}
 */
export function values({map}) {
  return Map.keys(map);
}
