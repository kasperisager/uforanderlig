import {Map} from '..';

/**
 * Loop over the values of a set.
 *
 * @memberof Set
 * @param {Function} iteratee
 * @param {Set} set
 */
export function each(iteratee, set) {
  if (!set) {
    return;
  }

  const {map} = set;

  Map.each((_, v) => iteratee(v), map);
}
