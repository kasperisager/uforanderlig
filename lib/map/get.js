/**
 * Get the value of a key in a map.
 *
 * @memberof Map
 * @param {String|Number} key
 * @param {Map} map
 * @return {*}
 */
export function get(key, {root, comparator}) {
  return root ? root.get(key, comparator) : null;
}
