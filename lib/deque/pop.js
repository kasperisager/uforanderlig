import {List} from '..';
import {Deque} from './data/deque';

/**
 * Get a new deque with the last item removed.
 *
 * @example
 * let d = Deque.empty();
 * d = Deque.push(1, d);
 * d = Deque.push(2, d);
 * d = Deque.push(3, d);
 * Deque.pop(d);
 * // => Deque [ 1, 2 ]
 *
 * @memberof Deque
 * @param {Deque} deque
 * @return {Deque}
 */
export function pop({front, back}) {
  if (List.isEmpty(back)) {
    return new Deque(List.empty(), List.tail(List.reverse(front)));
  }

  return new Deque(front, List.tail(back));
}
