import {List} from '..';
import {Deque} from './data/deque';

export function pop(deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(b)) {
    return new Deque(List.empty(), List.tail(List.reverse(f)));
  }

  return new Deque(f, List.tail(b));
}
