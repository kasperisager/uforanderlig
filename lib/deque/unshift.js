import {List} from '..';
import {Deque} from './data/deque';

export function unshift(item, deque) {
  const f = deque._front;
  const b = deque._back;

  return new Deque(List.add(item, f), b);
}
