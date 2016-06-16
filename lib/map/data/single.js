import {Entry} from './entry';
import {Pseudo} from './pseudo';
import {Double} from './double';

/**
 * A single node.
 *
 * @private
 */
export class Single {
  /**
   * @private
   */
  constructor(a, left, right) {
    this._a = a;
    this._l = left;
    this._r = right;
  }

  /**
   * @private
   */
  get(key, comparator) {
    const l = this._l;
    const r = this._r;

    const ca = comparator(key, this._a._k);

    if (ca === 0) {
      return this._a._v;
    }

    if (l && ca < 0) {
      return l.get(key, comparator);
    }

    if (r && ca > 0) {
      return r.get(key, comparator);
    }
  }

  /**
   * @private
   */
  set(key, value, comparator) {
    const a = this._a;
    const l = this._l;
    const r = this._r;
    const e = new Entry(key, value);

    const ca = comparator(key, a._k);

    if (ca === 0) {
      return new Single(e, l, r);
    }

    if (ca < 0) {
      if (!l) {
        return new Double(e, a);
      }

      const i = l.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Double(i._a, a, i._l, i._r, r);
      }

      return new Single(a, i, r);
    }

    if (ca > 0) {
      if (!r) {
        return new Double(a, e);
      }

      const i = r.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Double(a, i._a, l, i._l, i._r);
      }

      return new Single(a, l, i);
    }
  }
}
