import {List} from '..';
import {Deque} from './data/deque';

export function push(item, deque) {
  const f = deque._front;
  const b = deque._back;

  if (List.isEmpty(f) && List.isEmpty(b)) {
    return new Deque(List.add(item, f), b);
  }

  return new Deque(f, List.add(item, b));
}
