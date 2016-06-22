import {Map} from '..';

/**
 * Check if a key exists in a set.
 *
 * @memberof Set
 * @param {*} key
 * @param {Set} set
 * @return {Boolean}
 */
export function has(key, set) {
  return Map.has(key, set._m);
}
