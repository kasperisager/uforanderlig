import {get} from './get';

/**
 * Check if a key exists in a map.
 *
 * @memberof Map
 * @param {*} key
 * @param {Map} map
 * @return {Boolean}
 */
export function has(key, map) {
  return get(key, map) !== null;
}
