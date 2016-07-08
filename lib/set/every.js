import {Map} from '..';

/**
 * Check if a predicate returns truthy for all values of a set.
 *
 * @memberof Set
 * @param {Function} predicate
 * @param {Set} set
 * @return {Boolean}
 */
export function every(predicate, {map}) {
  return Map.every((_, key) => predicate(key), map);
}
