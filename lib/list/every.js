import {head} from './head';
import {tail} from './tail';

/**
 * Check if every item of a list matches a predicate.
 *
 * @memberof List
 * @param {Function} predicate
 * @param {List} list
 * @return {Boolean}
 */
export function every(predicate, list) {
  let h = head(list);
  let t = tail(list);

  while (h && t) {
    if (!predicate(h)) {
      return false;
    }

    h = head(t);
    t = tail(t);
  }

  return true;
}
