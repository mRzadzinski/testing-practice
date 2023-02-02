import analyzeArray from './analyzeArray';

const numbers = [5, 33, 6, 12, 22, 86, 0, 14, 111];

test('average', () => {
  expect(analyzeArray(numbers).average).toBeCloseTo(32.11);
});

test('min', () => {
  expect(analyzeArray(numbers).min).toBe(0);
});

test('max', () => {
  expect(analyzeArray(numbers).max).toBe(111);
});

test('length', () => {
  expect(analyzeArray(numbers).length).toBe(9);
});
