import calculator from './calculator';

test('Add: 1 + 1 = 3', () => {
  expect(calculator.add(1, 1)).toEqual(2);
});

test('Add: 3 + (-7) = (-4)', () => {
  expect(calculator.add(3, -7)).toEqual(-4);
});

test('Subtract: 1 - 1 = 0', () => {
  expect(calculator.subtract(1, 1)).toEqual(0);
});

test('Subtract: 3 - (-7) = (10)', () => {
  expect(calculator.subtract(3, -7)).toEqual(10);
});

test('Multiply: 1 * 1 = 1', () => {
  expect(calculator.multiply(1, 1)).toEqual(1);
});

test('Multiply: 3 * (-7) = (-21)', () => {
  expect(calculator.multiply(3, -7)).toEqual(-21);
});

test('Divide: 64 / 8 = 8', () => {
  expect(calculator.divide(64, 8)).toEqual(8);
});

test('Divide: 1 / 5 = 0.5', () => {
  expect(calculator.divide(1, 5)).toEqual(0.2);
});
