/**
 * An immutable 2-3 tree map.
 *
 * ```js
 * import {Map} from 'uforanderlig';
 * ```
 */
class Map {
  /**
   * Create a new map.
   *
   * @param {Single|Double} root
   * @private
   */
  constructor(root) {
    this._r = root;
  }

  /**
   * Return a string representation of this map.
   *
   * @return {String}
   * @ignore
   */
  toString() {
    let q = [this._r];
    let i = [];
    let n;

    while ((n = q.shift())) {
      i[i.length] = `${n._a._k}: ${n._a._v}`;
      q[q.length] = n._l;

      if (n instanceof Double) {
        i[i.length] = `${n._b._k}: ${n._b._v}`;
        q[q.length] = n._m;
      }

      q[q.length] = n._r;
    }

    return i.length ? `Map { ${i.sort().join(', ')} }` : 'Map {}';
  }
}

/**
 * A key/value entry in a map.
 *
 * @private
 */
class Entry {
  /**
   * Create a new entry.
   *
   * @param {String|Number} key
   * @param {*} value
   * @private
   */
  constructor(key, value) {
    this._k = key;
    this._v = value;
  }
}

/**
 * A pseudo node.
 *
 * @private
 */
class Pseudo {
  /**
   * @private
   */
  constructor(entry, left, right) {
    this._a = entry;
    this._l = left;
    this._r = right;
  }
}

/**
 * A single node.
 *
 * @private
 */
class Single {
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
  get(key) {
    const a = this._a;
    const l = this._l;
    const r = this._r;

    if (key === a._k) {
      return a._v;
    }

    if (l && key < a._k) {
      return l.get(key);
    }

    if (r && key > a._k) {
      return r.get(key);
    }
  }

  /**
   * @private
   */
  set(key, value) {
    const a = this._a;
    const l = this._l;
    const r = this._r;
    const e = new Entry(key, value);

    if (key === a._k) {
      return new Single(e, l, r);
    }

    if (key < a._k) {
      if (!l) {
        return new Double(e, a);
      }

      const i = l.set(key, value);

      if (i instanceof Pseudo) {
        return new Double(i._a, a, i._l, i._r, r);
      }

      return new Single(a, i, r);
    }

    if (key > a._k) {
      if (!r) {
        return new Double(a, e);
      }

      const i = r.set(key, value);

      if (i instanceof Pseudo) {
        return new Double(a, i._a, l, i._l, i._r);
      }

      return new Single(a, l, i);
    }
  }
}

/**
 * A double node.
 *
 * @private
 */
class Double {
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
  get(key) {
    const a = this._a;
    const b = this._b;
    const l = this._l;
    const m = this._m;
    const r = this._r;

    if (key === a._k) {
      return a._v;
    }

    if (key === b._k) {
      return b._v;
    }

    if (l && key < a._k) {
      return l.get(key);
    }

    if (r && key > b._k) {
      return r.get(key);
    }

    if (m && key > a._k && key < b._k) {
      return m.get(key);
    }
  }

  /**
   * @private
   */
  set(key, value) {
    const a = this._a;
    const b = this._b;
    const l = this._l;
    const m = this._m;
    const r = this._r;
    const e = new Entry(key, value);

    if (key === a._k) {
      return new Double(e, b, l, m, r);
    }

    if (key === b._k) {
      return new Double(a, e, l, m, r);
    }

    if (key < a._k) {
      if (!l) {
        return new Pseudo(a, new Single(e), new Single(b));
      }

      const i = l.set(key, value);

      if (i instanceof Pseudo) {
        return new Pseudo(a, new Single(i._a, i._l, i._r), new Single(b, m, r));
      }

      return new Double(a, b, i, m, r);
    }

    if (key > b._k) {
      if (!r) {
        return new Pseudo(b, new Single(a), new Single(e));
      }

      const i = r.set(key, value);

      if (i instanceof Pseudo) {
        return new Pseudo(b, new Single(a, l, m), new Single(i._a, i._l, i._r));
      }

      return new Double(a, b, l, m, i);
    }

    if (key > a._k && key < b._k) {
      if (!m) {
        return new Pseudo(e, new Single(a), new Single(b));
      }

      const i = m.set(key, value);

      if (i instanceof Pseudo) {
        return new Pseudo(i._a, new Single(a, l, i._l), new Single(b, i._r, r));
      }

      return new Double(a, b, l, i, r);
    }
  }
}

/**
 * Create an empty map.
 *
 * @memberof Map
 * @return {Map}
 */
export function empty() {
  return new Map();
}

/**
 * Get the value of a key in a map.
 *
 * @memberof Map
 * @param {String|Number} key
 * @param {Map} map
 * @return {*}
 */
export function get(key, map) {
  return map._r ? map._r.get(key) : undefined;
}

/**
 * Set the value of a key in a map.
 *
 * @memberof Map
 * @param {String|Number} key
 * @param {*} value
 * @param {Map} map
 * @return {*}
 */
export function set(key, value, map) {
  let r;

  if (map._r) {
    r = map._r.set(key, value);

    if (r instanceof Pseudo) {
      r = new Single(r._a, r._l, r._r);
    }
  } else {
    r = new Single(new Entry(key, value));
  }

  return new Map(r);
}
