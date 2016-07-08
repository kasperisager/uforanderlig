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
export function last({front, back}) {
  if (List.isEmpty(back)) {
    return List.last(front);
  }

  return List.head(back);
}
