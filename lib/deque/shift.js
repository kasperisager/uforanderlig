import {List} from '..';
import {Deque} from './data/deque';

/**
 * Get a new deque with the first item removed.
 *
 * @memberof Deque
 * @param {Deque} deque
 * @return {Deque}
 */
export function shift(deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(f)) {
    return new Deque(List.reverse(b), List.empty());
  }

  return new Deque(List.tail(f), b);
}