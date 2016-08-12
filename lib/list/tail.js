import {List} from './data/list';
import {Leaf} from './data/leaf';

/**
 * Get the tail of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.tail(l);
 * // => List [ 2, 1 ]
 *
 * @memberof List
 * @param {List} list
 * @return {List}
 */
export function tail(list) {
  if (!list) {
    return new List();
  }

  const {head} = list;

  if (head instanceof Leaf) {
    return new List();
  }

  const {next} = head;

  return new List(next);
}
