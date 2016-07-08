import {List} from '..';
import {Deque} from './data/deque';

/**
 * Add an item to the end of a deque.
 *
 * @example
 * let d = Deque.empty();
 * d = Deque.push(1, d);
 * d = Deque.push(2, d);
 * d = Deque.push(3, d);
 * // => Deque [ 1, 2, 3 ]
 *
 * @memberof Deque
 * @param {*} item
 * @param {Deque} deque
 * @return {Deque}
 */
export function push(item, {front, back}) {
  if (List.isEmpty(front) && List.isEmpty(back)) {
    return new Deque(List.add(item, front), back);
  }

  return new Deque(front, List.add(item, back));
}
