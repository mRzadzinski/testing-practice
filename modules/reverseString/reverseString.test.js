import reverseString from './reverseString';

test('papaya -> ayapap', () => {
  expect(reverseString('papaya')).toBe('ayapap');
});

test('Working on the highway! -> !yawhgih eht no gnikroW', () => {
  expect(reverseString('Working on the highway!')).toBe(
    '!yawhgih eht no gnikroW'
  );
});
