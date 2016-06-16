/**
 * Get the length of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.length(l);
 * // => 3
 *
 * @memberof List
 * @param {List} list
 * @return {Number}
 */
export function length(list) {
  if (!list) {
    return 0;
  }

  let s = 0;
  let n = list._head;

  while (n) {
    s++;
    n = n._next;
  }

  return s;
}
