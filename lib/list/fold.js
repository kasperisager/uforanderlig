/**
 * Fold over the items of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.fold((s, i) => s + i, 0, l);
 * // => 6
 *
 * @memberof List
 * @param {Function} iteratee
 * @param {*} state
 * @param {List} list
 * @return {*}
 */
export function fold(iteratee, state, list) {
  for (const item of list) {
    state = iteratee(state, item);
  }

  return state;
}
