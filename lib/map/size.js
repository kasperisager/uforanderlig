import {fold} from './fold';

/**
 * Get the size of a map.
 *
 * @memberof Map
 * @param {Map} map
 * @return {Number}
 */
export function size(map) {
  return fold(s => s + 1, 0, map);
}
