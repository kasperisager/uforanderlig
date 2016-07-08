import {Map} from '..';

/**
 * Find the first value of a set for which a predicate returns truthy.
 *
 * @memberof Set
 * @param {Function} predicate
 * @param {Set} set
 * @return {*}
 */
export function find(predicate, {map}) {
  return Map.find((_, key) => predicate(key), map);
}
