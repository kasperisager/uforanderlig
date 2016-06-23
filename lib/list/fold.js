import {each} from './each';

/**
 * Fold over the items of a list.
 *
 * @memberof List
 * @param {Function} iteratee
 * @param {*} state
 * @param {List} list
 * @return {*}
 */
export function fold(iteratee, state, list) {
  each(i => {
    state = iteratee(state, i);
  }, list);

  return state;
}
