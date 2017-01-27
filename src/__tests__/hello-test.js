const hello = require('hello');
const assert = require('assert');

describe('hello', () => {
  it('should print hello bob', () => {
    assert.equal("Hello Bob!", hello.hello("Bob"));
  });
});
