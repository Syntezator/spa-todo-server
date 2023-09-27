import tap from 'tap';
import assert from 'node:assert/strict';

tap.mochaGlobals();

import {generateToken} from './generateToken.mjs';

describe('generateToken:', () => {
  it('Unit test 1', () => {
    const token = generateToken();
    assert.equal(typeof token, 'string');
  });

  it('Unit test 2', () => {
    const token = generateToken();
    assert.equal(token.length, 32);
  });

  it('Unit test 3', () => {
    const token1 = generateToken();
    const token2 = generateToken();
    assert.notEqual(token1, token2);
  });
});
