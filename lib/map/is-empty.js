/**
 * Check if a map is empty.
 *
 * @memberof Map
 * @param {Map} map
 * @return {Boolean}
 */
export function isEmpty(map) {
  return !map._root;
}
