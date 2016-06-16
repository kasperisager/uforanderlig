import {List} from '..';
import {Deque} from './data/deque';

export function empty() {
  return new Deque(List.empty(), List.empty());
}
