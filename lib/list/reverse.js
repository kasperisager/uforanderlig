import {Node} from './data/node';
import {List} from './data/list';

export function reverse(list) {
  if (!list) {
    return list;
  }

  let n = list._head;
  let r;

  while (n) {
    r = new Node(n._item, r);
    n = n._next;
  }

  return new List(r);
}
