/**
 * Check if a map is empty.
 *
 * @memberof Map
 * @param {Map} map
 * @return {Boolean}
 */
export function isEmpty(map) {
  if (!map) {
    return true;
  }

  const {root} = map;

  return !root;
}
