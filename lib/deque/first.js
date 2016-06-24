import {List} from '..';

/**
 * Get the first item of a deque.
 *
 * @example
 * let d = Deque.empty();
 * d = Deque.push(1, d);
 * d = Deque.push(2, d);
 * d = Deque.push(3, d);
 * Deque.first(d);
 * // => 1
 *
 * @memberof Deque
 * @param {Deque} deque
 * @return {*}
 */
export function first(deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(f)) {
    return List.last(b);
  }

  return List.head(f);
}
