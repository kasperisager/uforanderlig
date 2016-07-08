/**
 * Check if a predicate returns truthy for any entry of a map.
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {Boolean}
 */
export function some(predicate, map) {
  for (const [value, key] of map) {
    if (predicate(value, key)) {
      return true;
    }
  }

  return false;
}
