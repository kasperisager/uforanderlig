import {head} from './head';
import {tail} from './tail';

/**
 * Find the first item of a list that matches a predicate.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.find(i => i % 2 === 0, l);
 * // => 2
 *
 * @memberof List
 * @param {Function} predicate
 * @param {List} list
 * @return {*}
 */
export function find(predicate, list) {
  let h = head(list);
  let t = tail(list);

  while (h && t) {
    if (predicate(h)) {
      return h;
    }

    h = head(t);
    t = tail(t);
  }
}
