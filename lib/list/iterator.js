import {ListIterator} from './data/list-iterator';

/**
 * Create an iterator for a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * const i = List.iterator(l);
 * i.next() // => 3
 * i.next() // => 2
 * i.next() // => 1
 *
 * @memberof List
 * @param {List} list
 * @return {*}
 */
export function iterator(list) {
  return new ListIterator(list);
}
