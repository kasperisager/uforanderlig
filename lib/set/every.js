import {Map} from '..';

/**
 * Check if a predicate returns truthy for all values of a set.
 *
 * @memberof Set
 * @param {Function} predicate
 * @param {Set} set
 * @return {Boolean}
 */
export function every(predicate, set) {
  if (!predicate || !set) {
    return true;
  }

  const {map} = set;

  return Map.every((_, key) => predicate(key), map);
}
