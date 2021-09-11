import calculator from '../code/calculator';

// Testing Adding

test('Add 5 and 5', () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test('Add 20 and 2', () => {
  expect(calculator.add(20, 2)).toBe(22);
});

test('Check adding string - add "10" and 20', () => {
  expect(calculator.add('10', 20)).toBe(30);
});

// Testing Subtraction

test('Subtract 5 and 5', () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});

test('Subtract 100 and 55', () => {
  expect(calculator.subtract(100, 55)).toBe(45);
});

test('Check subtraction of string - subtract "35" and 20', () => {
  expect(calculator.subtract('35', 20)).toBe(15);
});

// Testing Division

test('Divide 5 by 5', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});

test('Divide 20 by 2', () => {
  expect(calculator.divide(20, 2)).toBe(10);
});

test('Check division of string - divide "50" by 5', () => {
  expect(calculator.divide('50', 5)).toBe(10);
});

// Testing Multiplication

test('Multiply 5 by 0', () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});

test('Multiply 20 by 2', () => {
  expect(calculator.multiply(20, 2)).toBe(40);
});

test('Check multiplication of string - multiply "11" by 5', () => {
  expect(calculator.multiply('11', 5)).toBe(55);
});
