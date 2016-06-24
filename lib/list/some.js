import {head} from './head';
import {tail} from './tail';

/**
 * Check if some item of a list matches a predicate.
 *
 * @memberof List
 * @param {Function} predicate
 * @param {List} list
 * @return {Boolean}
 */
export function some(predicate, list) {
  let h = head(list);
  let t = tail(list);

  while (h && t) {
    if (predicate(h)) {
      return true;
    }

    h = head(t);
    t = tail(t);
  }

  return false;
}
