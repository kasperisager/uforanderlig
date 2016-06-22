import {List} from '..';

/**
 * Get the first item of a deque.
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
