import {List, Tuple} from '..';
import {fold} from './fold';

/**
 * Get all entries of a map.
 *
 * @example
 * let m = Map.empty();
 * m = Map.set(1, 'foo', m);
 * m = Map.set(2, 'bar', m);
 * Map.entries(m);
 * // => List [ (1, 'foo'), (2, 'bar') ]
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
