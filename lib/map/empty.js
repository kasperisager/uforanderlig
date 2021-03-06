import {Map} from './data/map';
import {Leaf} from './data/leaf';

/**
 * Create an empty map.
 *
 * @example
 * const m = Map.empty();
 *
 * @memberof Map
 * @return {Map}
 */
export function empty() {
  return new Map(new Leaf());
}
