import test from 'node:test';
import assert from 'node:assert/strict';

import { escapeHtml } from '../src/js/utils/escape.js';

test('escapeHtml escapes angle brackets', () => {
  assert.equal(escapeHtml('<script>'), '&lt;script&gt;');
});

test('escapeHtml escapes ampersands', () => {
  assert.equal(escapeHtml('a & b'), 'a &amp; b');
});

test('escapeHtml escapes double quotes', () => {
  assert.equal(escapeHtml('"hello"'), '&quot;hello&quot;');
});

test('escapeHtml escapes single quotes', () => {
  assert.equal(escapeHtml("it's"), 'it&#39;s');
});

test('escapeHtml leaves safe strings unchanged', () => {
  assert.equal(escapeHtml('Hello world'), 'Hello world');
});

test('escapeHtml handles empty string', () => {
  assert.equal(escapeHtml(''), '');
});