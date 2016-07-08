/**
 * Get the head of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.head(l);
 * // => 3
 *
 * @memberof List
 * @param {List} list
 * @return {*}
 */
export function head({head}) {
  return head.item;
}
