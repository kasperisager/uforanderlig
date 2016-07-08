import {Map} from '..';

/**
 * Check if a value exists in a set.
 *
 * @memberof Set
 * @param {*} value
 * @param {Set} set
 * @return {Boolean}
 */
export function has(value, {map}) {
  return Map.has(value, map);
}
