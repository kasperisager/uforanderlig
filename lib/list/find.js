import {head} from './head';
import {tail} from './tail';

/**
 * Find the first item of a list that matches a predicate.
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
