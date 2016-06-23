import {each} from './each';

/**
 * Get all keys of a map.
 *
 * @memberof Map
 * @param {Map} map
 * @return {Array}
 */
export function keys(map) {
  const k = [];

  each((_, key) => {
    k[k.length] = key;
  }, map);

  return k;
}
