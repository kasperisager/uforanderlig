import {each} from './each';

/**
 * Fold over the values of a set.
 *
 * @memberof Set
 * @param {Function} iteratee
 * @param {*} state
 * @param {Set} set
 * @return {*}
 */
export function fold(iteratee, state, set) {
  each(v => {
    state = iteratee(state, v);
  }, set);

  return state;
}
