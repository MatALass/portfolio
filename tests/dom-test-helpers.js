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
}

class FakeElement {
  constructor(id = "", tagName = "div") {
    this.id = id;
    this.tagName = tagName.toUpperCase();
    this.textContent = "";
    this.innerHTML = "";
    this.style = {};
    this.attributes = {};
    this.children = [];
    this.classList = new FakeClassList();
    this.href = "";
    this.src = "";
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
  }

  getAttribute(name) {
    return this.attributes[name];
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (name === "src") this.src = "";
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }
}

export function createFakeDocument(elementIds = []) {
  const elements = new Map();
  const metaDescription = new FakeElement("meta-description", "meta");

  for (const id of elementIds) {
    elements.set(id, new FakeElement(id));
  }

  const document = {
    title: "",
    documentElement: { lang: "en" },
    body: new FakeElement("body", "body"),
    createElement(tagName) {
      return new FakeElement("", tagName);
    },
    getElementById(id) {
      return elements.get(id) ?? null;
    },
    querySelector(selector) {
      if (selector === 'meta[name="description"]') return metaDescription;
      return null;
    },
  };

  return { document, elements, metaDescription, FakeElement };
}
