import {empty} from './empty';
import {fold} from './fold';
import {set} from './set';

/**
 * Filter the entries of a map.
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {Map}
 */
export function filter(predicate, map) {
  return fold((m, v, k) => predicate(v, k) ? set(k, v, m) : m, empty(), map);
}
