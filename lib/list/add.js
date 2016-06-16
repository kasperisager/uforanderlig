import {Node} from './data/node';
import {List} from './data/list';

/**
 * Add an item to the front of a list.
 *
 * @example
 * const l1 = List.empty();
 * const l2 = List.add(1, l2);
 * const l3 = List.add(2, l3);
 *
 * @memberof List
 * @param {*} item
 * @param {List} list
 * @return {List}
 */
export function add(item, list) {
  if (item === undefined || item === null) {
    return list;
  }

  return new List(new Node(item, list._head));
}
