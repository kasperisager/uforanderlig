/**
 * Loop over the entries of a map.
 *
 * @memberof Map
 * @param {Function} iteratee
 * @param {Map} map
 */
export function each(iteratee, map) {
  for (const [value, key] of map) {
    iteratee(value, key);
  }
}
