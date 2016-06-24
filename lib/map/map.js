import {empty} from './empty';
import {fold} from './fold';
import {set} from './set';

/**
 * Map over the entries of a map.
 *
 * @memberof Map
 * @param {Function} iteratee
 * @param {Map} map
 * @return {Map}
 */
export function map(iteratee, map) {
  return fold((m, v, k) => set(k, iteratee(v, k), m), empty(), map);
}
