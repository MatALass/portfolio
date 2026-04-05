class FakeClassList {
  constructor() {
    this.values = new Set();
  }

  add(...tokens) {
    tokens.forEach((token) => this.values.add(token));
  }

  remove(...tokens) {
    tokens.forEach((token) => this.values.delete(token));
  }

  contains(token) {
    return this.values.has(token);
  }

  toggle(token, force) {
    if (force === true) {
      this.add(token);
      return true;
    }

    if (force === false) {
      this.remove(token);
      return false;
    }

    if (this.contains(token)) {
      this.remove(token);
      return false;
    }

    this.add(token);
    return true;
  }
}

class FakeTextNode {
  constructor(data) {
    this.nodeType = 3; // TEXT_NODE
    this.data = String(data);
  }

  // Serialise as plain text (no tags) so innerHTML on parent picks it up
  serialize() {
    return this.data;
  }
}

class FakeElement {
  constructor(id = '', tagName = 'div') {
    this.id = id;
    this.tagName = tagName.toUpperCase();
    this.style = {};
    this.attributes = {};
    this._children = []; // internal: holds FakeElement | FakeTextNode
    this.classList = new FakeClassList();
    this.href = '';
    this.src = '';
    this.loading = '';
    this.referrerPolicy = '';
    this.focused = false;
    this.dataset = {};
    // innerHTML as a settable string (direct assignment, e.g. element.innerHTML = '<li>…</li>')
    this._rawHtml = null;
  }

  // ── textContent ──────────────────────────────────────────────────────────
  get textContent() {
    if (this._rawHtml !== null) {
      // Strip tags from raw HTML to approximate textContent
      return this._rawHtml.replace(/<[^>]*>/g, '');
    }
    return this._children
      .map((c) => (c instanceof FakeTextNode ? c.data : c.textContent))
      .join('');
  }

  set textContent(val) {
    this._children = [new FakeTextNode(String(val))];
    this._rawHtml = null;
  }

  // ── innerHTML ────────────────────────────────────────────────────────────
  get innerHTML() {
    if (this._rawHtml !== null) return this._rawHtml;
    return this._children.map((c) => c.serialize()).join('');
  }

  set innerHTML(val) {
    this._rawHtml = String(val);
    this._children = [];
  }

  // ── serialize (used by parent's innerHTML getter) ─────────────────────
  serialize() {
    const tag = this.tagName.toLowerCase();
    const cls = this.classList.values.size
      ? ` class="${[...this.classList.values].join(' ')}"`
      : '';
    const id = this.id ? ` id="${this.id}"` : '';
    const href = this.href ? ` href="${this.href}"` : '';
    const extra = `${cls}${id}${href}`;
    return `<${tag}${extra}>${this.innerHTML}</${tag}>`;
  }

  // ── children (array of FakeElement only, mirrors DOM .children) ────────
  get children() {
    return this._children.filter((c) => c instanceof FakeElement);
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
    if (name === 'href') this.href = String(value);
    if (name === 'src') this.src = String(value);
  }

  getAttribute(name) {
    return this.attributes[name];
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (name === 'src') this.src = '';
  }

  appendChild(child) {
    this._rawHtml = null; // invalidate raw cache
    this._children.push(child);
    return child;
  }

  focus() {
    this.focused = true;
  }
}

export function createFakeDocument(elementIds = []) {
  const elements = new Map();
  const metaDescription = new FakeElement('meta-description', 'meta');

  for (const id of elementIds) {
    elements.set(id, new FakeElement(id));
  }

  const document = {
    title: '',
    activeElement: null,
    documentElement: { lang: 'en' },
    body: new FakeElement('body', 'body'),
    createElement(tagName) {
      return new FakeElement('', tagName);
    },
    createTextNode(data) {
      return new FakeTextNode(data);
    },
    getElementById(id) {
      return elements.get(id) ?? null;
    },
    querySelector(selector) {
      if (selector === 'meta[name="description"]') return metaDescription;
      if (selector.startsWith('.')) {
        const className = selector.slice(1);
        for (const el of elements.values()) {
          if (el.classList.contains(className)) return el;
        }
      }
      return null;
    },
  };

  return { document, elements, metaDescription, FakeElement };
}
