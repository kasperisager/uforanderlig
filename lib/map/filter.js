import {empty} from './empty';
import {fold} from './fold';
import {set} from './set';

/**
 * Filter the entries of a map.
 *
 * @example
 * let m = Map.empty();
 * m = Map.set(1, '1', m);
 * m = Map.set(2, '2', m);
 * m = Map.set(3, '3', m);
 * Map.filter((v, k) => k < 3, m);
 * // => Map { 1: '1', 2: '2' }
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {Map}
 */
export function filter(predicate, map) {
  return fold((m, v, k) => predicate(v, k) ? set(k, v, m) : m, empty(), map);
}
