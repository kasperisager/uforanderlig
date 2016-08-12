import {Map} from '..';
import {Set} from './data/set';

/**
 * Add a value to a set.
 *
 * @memberof Set
 * @param {*} value
 * @param {Set} set
 */
export function add(value, set) {
  if (value === null || value === undefined) {
    return set;
  }

  const {map} = set;

  return new Set(Map.set(value, true, map));
}
