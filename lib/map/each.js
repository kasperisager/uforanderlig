/**
 * Loop over the entries of a map.
 *
 * @memberof Map
 * @param {Function} iteratee
 * @param {Map} map
 */
export function each(iteratee, map) {
  for (const entry of map) {
    const value = entry[0];
    const key = entry[1];

    iteratee(value, key);
  }
}
