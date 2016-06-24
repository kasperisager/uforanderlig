/**
 * Loop over the items of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.each(console.log, l);
 *
 * @memberof List
 * @param {Function} iteratee
 * @param {List} list
 */
export function each(iteratee, list) {
  if (!list || !list._head) {
    return;
  }

  let n = list._head;

  while (n) {
    iteratee(n._item);
    n = n._next;
  }
}
