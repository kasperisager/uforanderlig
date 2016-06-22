import {List} from '..';
import {Deque} from './data/deque';

/**
 * Add an item to the front of a deque.
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
