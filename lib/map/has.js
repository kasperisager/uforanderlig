/**
 * Check if a key exists in a map.
 *
 * @memberof Map
 * @param {*} key
 * @param {Map} map
 * @return {Boolean}
 */
export function has(key, map) {
  if (!map || !map._r) {
    return false;
  }

  return map._r.get(key, map._c) !== undefined;
}
