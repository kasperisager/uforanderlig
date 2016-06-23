import {each} from './each';

/**
 * Get all values of a map.
 *
 * @memberof Map
 * @param {Map} map
 * @return {Array}
 */
export function values(map) {
  const v = [];

  each(value => {
    v[v.length] = value;
  }, map);

  return v;
}
