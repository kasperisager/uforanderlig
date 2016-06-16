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

  if (map._r) {
    r = map._r.set(key, value, map._c);

    if (r instanceof Pseudo) {
      r = new Single(r._a, r._l, r._r);
    }
  } else {
    r = new Single(new Entry(key, value));
  }

  return new Map(r, map._c);
}
