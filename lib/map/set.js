import {Entry} from './data/entry';
import {Leaf, LEAF} from './data/leaf';
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

  let {root} = map;

  if (root instanceof Leaf) {
    root = new Single(new Entry(key, value), LEAF, LEAF);
  } else {
    root = root.set(key, value, map.comparator);

    if (root instanceof Pseudo) {
      root = new Single(root.a, root.left, root.right);
    } else if (root === map.root) {
      return map;
    }
  }

  return new Map(root, map.comparator);
}
