/**
 * Check if a key exists in a map.
 *
 * @memberof Map
 * @param {*} key
 * @param {Map} map
 * @return {Boolean}
 */
export function has(key, map) {
  if (!map || !map._root) {
    return false;
  }

  return map._root.get(key, map._comparator) !== undefined;
}
