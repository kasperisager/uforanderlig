import {List} from '..';
import {Deque} from './data/deque';

/**
 * Add an item to the front of a deque.
 *
 * @example
 * let d = Deque.empty();
 * d = Deque.unshift(1, d);
 * d = Deque.unshift(2, d);
 * d = Deque.unshift(3, d);
 * // => Deque [ 3, 2, 1 ]
 *
 * @memberof Deque
 * @param {*} item
 * @param {Deque} deque
 * @return {Deque}
 */
export function unshift(item, deque) {
  const f = deque._front;
  const b = deque._back;

  return new Deque(List.add(item, f), b);
}
