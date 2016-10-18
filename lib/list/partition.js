import {Tuple} from '..';
import {add} from './add';
import {empty} from './empty';

/**
 * Partition the items of a list to two separate lists.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.partition(n => n % 2 === 0, l);
 * // => (List [ 2 ], List [ 1, 3 ])
 *
 * @memberof List
 * @param {Function} predicate
 * @param {List} list
 * @return {Tuple}
 */
export function partition(predicate, list) {
  let fst = empty();
  let snd = empty();

  for (const item of list) {
    if (predicate(item)) {
      fst = add(item, fst);
    } else {
      snd = add(item, snd);
    }
  }

  return Tuple.of(fst, snd);
}
