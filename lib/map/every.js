/**
 * Check if a predicate returns truthy for all entries of a map.
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {Boolean}
 */
export function every(predicate, map) {
  for (const entry of map) {
    const value = entry[0];
    const key = entry[1];

    if (!predicate(value, key)) {
      return false;
    }
  }

  return true;
}
