import {MapIterator} from './data/map-iterator';

export function iterator(map) {
  return new MapIterator(map);
}
