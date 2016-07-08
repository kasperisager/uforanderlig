/**
 * Find the first entry of a map for which a predicate returns truthy.
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {*}
 */
export function find(predicate, map) {
  for (const [value, key] of map) {
    if (predicate(value, key)) {
      return value;
    }
  }
}
