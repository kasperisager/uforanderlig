import {Map} from '..';

/**
 * Check if a value exists in a set.
 *
 * @memberof Set
 * @param {*} value
 * @param {Set} set
 * @return {Boolean}
 */
export function has(value, set) {
  const {map} = set;
  return Map.has(value, map);
}
