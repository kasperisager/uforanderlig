/**
 * Find the first entry of a map for which a predicate returns truthy.
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {*}
 */
export function find(predicate, map) {
  for (const entry of map) {
    const value = entry[0];
    const key = entry[1];

    if (predicate(value, key)) {
      return value;
    }
  }
}
