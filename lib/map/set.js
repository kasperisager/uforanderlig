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
  if (key === null || key === undefined || value === null || value === undefined) {
    return map;
  }

  let r;

  if (map.root) {
    r = map.root.set(key, value, map.comparator);

    if (r instanceof Pseudo) {
      r = new Single(r.a, r.left, r.right);
    } else if (r === map.root) {
      return map;
    }
  } else {
    r = new Single(new Entry(key, value));
  }

  return new Map(r, map.comparator);
}
