import {List} from '..';
import {Deque} from './data/deque';

/**
 * Create an empty deque.
 *
 * @example
 * const d = Deque.empty();
 *
 * @memberof Deque
 * @return {Deque}
 */
export function empty() {
  return new Deque(List.empty(), List.empty());
}
