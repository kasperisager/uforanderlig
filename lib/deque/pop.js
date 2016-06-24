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
export function pop(deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(b)) {
    return new Deque(List.empty(), List.tail(List.reverse(f)));
  }

  return new Deque(f, List.tail(b));
}
