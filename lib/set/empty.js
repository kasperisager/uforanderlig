import {Map} from '..';
import {Set} from './data/set';

/**
 * Create an empty set.
 *
 * @memberof Set
 * @return {Set}
 */
export function empty() {
  return new Set(Map.empty());
}
