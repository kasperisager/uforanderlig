import {head} from './head';
import {tail} from './tail';

/**
 * Loop over the items of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.each(console.log, l);
 *
 * @memberof List
 * @param {Function} iteratee
 * @param {List} list
 */
export function each(iteratee, list) {
  let h = head(list);
  let t = tail(list);

  while (h) {
    iteratee(h);

    h = head(t);
    t = tail(t);
  }
}
