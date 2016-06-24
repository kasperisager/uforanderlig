import {add} from './add';
import {empty} from './empty';
import {fold} from './fold';

/**
 * Map over the values of a set.
 *
 * @memberof Set
 * @param {Function} iteratee
 * @param {Set} set
 * @return {Set}
 */
export function map(iteratee, set) {
  return fold((s, v) => add(iteratee(v), s), empty(), set);
}
