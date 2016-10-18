import {add} from './add';

/**
 * Get the union of two sets.
 *
 * @memberof Set
 * @param {Set} first
 * @param {Set} second
 * @return {Set}
 */
export function union(first, second) {
  for (const value of second) {
    first = add(value, first);
  }

  return first;
}
