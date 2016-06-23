import {List} from '..';
import {fold} from './fold';

/**
 * Get all values of a map.
 *
 * @memberof Map
 * @param {Map} map
 * @return {List}
 */
export function values(map) {
  return List.reverse(
    fold((l, v) => List.add(v, l), List.empty(), map)
  );
}
