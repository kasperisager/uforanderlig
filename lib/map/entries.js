import {each} from './each';

/**
 * Get all entries of a map.
 *
 * @memberof Map
 * @param {Map} map
 * @return {Array}
 */
export function entries(map) {
  const e = [];

  each((value, key) => {
    e[e.length] = [key, value];
  }, map);

  return e;
}
