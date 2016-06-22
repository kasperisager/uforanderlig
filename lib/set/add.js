import {Map} from '..';
import {Set} from './data/set';

/**
 * Add a key to a set.
 *
 * @memberof Set
 * @param {*} key
 * @param {Set} set
 */
export function add(key, set) {
  return new Set(Map.set(key, true, set._m));
}
