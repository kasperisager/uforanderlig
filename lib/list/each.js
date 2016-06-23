/**
 * Loop over the items of a list.
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
