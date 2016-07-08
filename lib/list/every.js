/**
 * Check if every item of a list matches a predicate.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.every(i => i < 4, l);
 * // => true
 *
 * @memberof List
 * @param {Function} predicate
 * @param {List} list
 * @return {Boolean}
 */
export function every(predicate, list) {
  for (const item of list) {
    if (!predicate(item)) {
      return false;
    }
  }

  return true;
}
