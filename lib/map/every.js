/**
 * Check if a predicate returns truthy for all entries of a map.
 *
 * @example
 * let m = Map.empty();
 * m = Map.set(1, '1', m);
 * m = Map.set(2, '2', m);
 * m = Map.set(3, '3', m);
 * Map.every((v, k) => parseInt(v) === k, m);
 * // => true
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
