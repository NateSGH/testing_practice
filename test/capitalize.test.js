import capitalize from '../code/capitalize';

test('Capitalize string "hello world"', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('Capitalize string "different ways', () => {
  expect(capitalize('different ways')).toBe('Different ways');
});
