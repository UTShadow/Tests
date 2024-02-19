
const sum = require('./Sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('subbstract 8 - 4 to equal 4', () => {
  expect(sum(8, -4)).toBe(4);
});
test('0.1 + 0.2 to equal 0.3', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});
/*  ● 0.1 + 0.3 to equal 0.4
expect(received).toBe(expected) // Object.is equality
Expected: 0.3
Received: 0.30000000000000004
*/
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});