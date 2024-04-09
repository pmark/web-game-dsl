import { add, fetchData, truthy } from '../src/module';

describe('add', () => {
  it('correctly adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });
});

describe('isTruthy function', () => {
  it('returns the correct value', () => {
    expect(truthy).toBeTruthy();
  });
});
