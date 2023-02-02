import capitalize from './capitalize';

test('hello -> Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('no way José -> No way José', () => {
  expect(capitalize('no way José')).toBe('No way José');
});

test('yEAh -> YEAh', () => {
  expect(capitalize('yEAh')).toBe('YEAh');
});
