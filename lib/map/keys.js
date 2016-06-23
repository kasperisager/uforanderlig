import {List} from '..';
import {fold} from './fold';

/**
 * Get all keys of a map.
 *
 * @memberof Map
 * @param {Map} map
 * @return {List}
 */
export function keys(map) {
  return List.reverse(
    fold((l, v, k) => List.add(k, l), List.empty(), map)
  );
}
