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
    this._left = left;
    this._right = right;
  }

  /**
   * @private
   */
  get(key, comparator) {
    const l = this._left;
    const r = this._right;

    const ca = comparator(key, this._a._key);

    if (ca === 0) {
      return this._a._value;
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
    const l = this._left;
    const r = this._right;
    const e = new Entry(key, value);

    const ca = comparator(key, a._key);

    if (ca === 0) {
      if (value === a._value) {
        return this;
      }

      return new Single(e, l, r);
    }

    if (ca < 0) {
      if (!l) {
        return new Double(e, a);
      }

      const i = l.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Double(i._a, a, i._left, i._right, r);
      }

      if (i === l) {
        return this;
      }

      return new Single(a, i, r);
    }

    if (ca > 0) {
      if (!r) {
        return new Double(a, e);
      }

      const i = r.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Double(a, i._a, l, i._left, i._right);
      }

      if (i === r) {
        return this;
      }

      return new Single(a, l, i);
    }
  }
}
