import {Map} from '..';

/**
 * Check if a predicate returns truthy for any value of a set.
 *
 * @memberof Set
 * @param {Function} predicate
 * @param {Set} set
 * @return {Boolean}
 */
export function some(predicate, set) {
  const {map} = set;
  return Map.some((_, key) => predicate(key), map);
}
