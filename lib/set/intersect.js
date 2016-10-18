import {add} from './add';
import {empty} from './empty';
import {has} from './has';

/**
 * Get the intersection of two sets.
 *
 * @memberof Set
 * @param {Set} first
 * @param {Set} second
 * @return {Set}
 */
export function intersect(first, second) {
  let set = empty();

  for (const value of first) {
    if (has(value, second)) {
      set = add(value, set);
    }
  }

  return set;
}
