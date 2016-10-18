import {Tuple} from '..';
import {add} from './add';
import {empty} from './empty';

/**
 * Partition the values of a set to two separate sets.
 *
 * @example
 * let s = Set.empty();
 * s = Set.add(1, s);
 * s = Set.add(2, s);
 * s = Set.add(3, s);
 * Set.partition(n => n % 2 === 0, l);
 * // => (Set [ 2 ], Set [ 1, 3 ])
 *
 * @memberof Set
 * @param {Function} predicate
 * @param {Set} set
 * @return {Tuple}
 */
export function partition(predicate, set) {
  let fst = empty();
  let snd = empty();

  for (const value of set) {
    if (predicate(value)) {
      fst = add(value, fst);
    } else {
      snd = add(value, snd);
    }
  }

  return Tuple.of(fst, snd);
}
