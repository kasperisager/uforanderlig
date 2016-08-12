/**
 * Get the value of a key in a map.
 *
 * @memberof Map
 * @param {String|Number} key
 * @param {Map} map
 * @return {*}
 */
export function get(key, map) {
  if (key === undefined || key === null || !map) {
    return null;
  }

  const {root, comparator} = map;

  if (!root) {
    return null;
  }

  return root ? root.get(key, comparator) : null;
}
