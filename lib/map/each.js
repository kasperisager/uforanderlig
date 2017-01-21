/**
 * Loop over the entries of a map.
 *
 * @example
 * let m = Map.empty();
 * m = Map.set(1, 'foo', m);
 * m = Map.set(2, 'bar', m);
 * Map.each(console.log, m);
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
