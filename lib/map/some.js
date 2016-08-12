/**
 * Check if a predicate returns truthy for any entry of a map.
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {Boolean}
 */
export function some(predicate, map) {
  for (const entry of map) {
    const value = entry[0];
    const key = entry[1];

    if (predicate(value, key)) {
      return true;
    }
  }

  return false;
}
