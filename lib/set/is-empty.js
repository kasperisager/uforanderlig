import {Map} from '..';

/**
 * Check if a set is empty.
 *
 * @memberof Set
 * @param {Set} set
 * @return {Boolean}
 */
export function isEmpty(set) {
  const {map} = set;
  return Map.isEmpty(map);
}
