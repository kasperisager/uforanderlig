import {add} from './add';
import {empty} from './empty';
import {has} from './has';

/**
 * Get the difference of two sets.
 *
 * @memberof Set
 * @param {Set} first
 * @param {Set} second
 * @return {Set}
 */
export function difference(first, second) {
  let set = empty();

  for (const value of first) {
    if (!has(value, second)) {
      set = add(value, set);
    }
  }

  return set;
}
