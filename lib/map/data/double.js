import {Entry} from './entry';
import {Pseudo} from './pseudo';
import {Single} from './single';

/**
 * A double node.
 *
 * @private
 */
export class Double {
  /**
   * @private
   */
  constructor(a, b, left, middle, right) {
    this._a = a;
    this._b = b;
    this._l = left;
    this._m = middle;
    this._r = right;
  }

  /**
   * @private
   */
  get(key, comparator) {
    const l = this._l;
    const m = this._m;
    const r = this._r;

    const ca = comparator(key, this._a._k);
    const cb = comparator(key, this._b._k);

    if (ca === 0) {
      return this._a._v;
    }

    if (cb === 0) {
      return this._b._v;
    }

    if (l && ca < 0) {
      return l.get(key);
    }

    if (r && cb > 0) {
      return r.get(key);
    }

    if (m && ca > 0 && cb < 0) {
      return m.get(key);
    }
  }

  /**
   * @private
   */
  set(key, value, comparator) {
    const a = this._a;
    const b = this._b;
    const l = this._l;
    const m = this._m;
    const r = this._r;
    const e = new Entry(key, value);

    const ca = comparator(key, a._k);
    const cb = comparator(key, b._k);

    if (ca === 0) {
      if (value === a._v) {
        return this;
      }

      return new Double(e, b, l, m, r);
    }

    if (cb === 0) {
      if (value === b._v) {
        return this;
      }

      return new Double(a, e, l, m, r);
    }

    if (ca < 0) {
      if (!l) {
        return new Pseudo(a, new Single(e), new Single(b));
      }

      const i = l.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Pseudo(a, new Single(i._a, i._l, i._r), new Single(b, m, r));
      }

      if (i === l) {
        return this;
      }

      return new Double(a, b, i, m, r);
    }

    if (cb > 0) {
      if (!r) {
        return new Pseudo(b, new Single(a), new Single(e));
      }

      const i = r.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Pseudo(b, new Single(a, l, m), new Single(i._a, i._l, i._r));
      }

      if (i === r) {
        return this;
      }

      return new Double(a, b, l, m, i);
    }

    if (ca > 0 && cb < 0) {
      if (!m) {
        return new Pseudo(e, new Single(a), new Single(b));
      }

      const i = m.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Pseudo(i._a, new Single(a, l, i._l), new Single(b, i._r, r));
      }

      if (i === m) {
        return this;
      }

      return new Double(a, b, l, i, r);
    }
  }
}
