import {SetIterator} from './data/set-iterator';

export function iterator(set) {
  return new SetIterator(set);
}
