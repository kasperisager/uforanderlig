import {Tuple} from '..';
import {set} from './set';
import {empty} from './empty';

/**
 * Partition the entries of a map to two separate maps.
 *
 * @memberof Map
 * @param {Function} predicate
 * @param {Map} map
 * @return {Tuple}
 */
export function partition(predicate, map) {
  let fst = empty();
  let snd = empty();

  for (const entry of map) {
    const value = entry[0];
    const key = entry[1];

    if (predicate(value, key)) {
      fst = set(key, value, fst);
    } else {
      snd = set(key, value, snd);
    }
  }

  return Tuple.of(fst, snd);
}
