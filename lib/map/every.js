/**
 * Check if a predicate returns truthy for all entries of a map.
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {Boolean}
 */
export function every(predicate, map) {
  for (const [value, key] of map) {
    if (!predicate(value, key)) {
      return false;
    }
  }

  return true;
}
