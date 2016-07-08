import {List} from '..';
import {Deque} from './data/deque';

/**
 * Get a new deque with the first item removed.
 *
 * @example
 * let d = Deque.empty();
 * d = Deque.push(1, d);
 * d = Deque.push(2, d);
 * d = Deque.push(3, d);
 * Deque.shift(d);
 * // => Deque [ 2, 3 ]
 *
 * @memberof Deque
 * @param {Deque} deque
 * @return {Deque}
 */
export function shift({front, back}) {
  if (List.isEmpty(front)) {
    return new Deque(List.reverse(back), List.empty());
  }

  return new Deque(List.tail(front), back);
}
