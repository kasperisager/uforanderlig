/**
 * Get the value of a key in a map.
 *
 * @memberof Map
 * @param {String|Number} key
 * @param {Map} map
 * @return {*}
 */
export function get(key, map) {
  return map._r ? map._r.get(key, map._c) : undefined;
}
