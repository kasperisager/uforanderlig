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
export function push(item, deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(f) && List.isEmpty(b)) {
    return new Deque(List.add(item, f), b);
  }

  return new Deque(f, List.add(item, b));
}
