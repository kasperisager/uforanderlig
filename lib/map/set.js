import {Entry} from './data/entry';
import {Pseudo} from './data/pseudo';
import {Single} from './data/single';
import {Map} from './data/map';

/**
 * Set the value of a key in a map.
 *
 * @memberof Map
 * @param {String|Number} key
 * @param {*} value
 * @param {Map} map
 * @return {Map}
 */
export function set(key, value, map) {
  let r;

  if (map._root) {
    r = map._root.set(key, value, map._comparator);

    if (r instanceof Pseudo) {
      r = new Single(r._a, r._left, r._right);
    }
  } else {
    r = new Single(new Entry(key, value));
  }

  if (r === map._root) {
    return map;
  }

  return new Map(r, map._comparator);
}
