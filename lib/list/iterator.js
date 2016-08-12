import {ListIterator} from './data/list-iterator';

export function iterator(list) {
  return new ListIterator(list);
}
