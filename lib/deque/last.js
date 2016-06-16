import {List} from '..';

export function last(deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(b)) {
    return List.last(f);
  }

  return List.head(b);
}
