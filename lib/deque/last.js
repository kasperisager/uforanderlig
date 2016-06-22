import {List} from '..';

/**
 * Get the last item of a deque.
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
