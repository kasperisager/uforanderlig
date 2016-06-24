import {List} from '..';

/**
 * Get the last item of a deque.
 *
 * @example
 * let d = Deque.empty();
 * d = Deque.push(1, d);
 * d = Deque.push(2, d);
 * d = Deque.push(3, d);
 * Deque.last(d);
 * // => 3
 *
 * @memberof Deque
 * @param {Deque} deque
 * @return {*}
 */
export function last(deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(b)) {
    return List.last(f);
  }

  return List.head(b);
}
