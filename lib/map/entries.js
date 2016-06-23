import {List, Tuple} from '..';
import {fold} from './fold';

/**
 * Get all entries of a map.
 *
 * @memberof Map
 * @param {Map} map
 * @return {List<Tuple>}
 */
export function entries(map) {
  return List.reverse(
    fold((l, v, k) => List.add(Tuple.of(k, v), l), List.empty(), map)
  );
}
