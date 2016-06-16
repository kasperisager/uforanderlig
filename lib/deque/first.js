import {List} from '..';

export function first(deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(f)) {
    return List.last(b);
  }

  return List.head(f);
}
