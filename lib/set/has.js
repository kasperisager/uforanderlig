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
  return Map.has(value, set._map);
}
