import {Map} from '..';
import {Set} from './data/set';

/**
 * Filter the values of a set.
 *
 * @memberof Set
 * @param {Function} predicate
 * @param {Set} set
 * @return {Set}
 */
export function filter(predicate, set) {
  const {map} = set;
  return new Set(Map.filter((_, key) => predicate(key), map));
}
