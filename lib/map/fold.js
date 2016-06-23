import {each} from './each';

/**
 * Fold over the entries of a map.
 *
 * @memberof Map
 * @param {Function} iteratee
 * @param {*} state
 * @param {Map} map
 * @return {*}
 */
export function fold(iteratee, state, map) {
  each((v, k) => {
    state = iteratee(state, v, k);
  }, map);

  return state;
}
