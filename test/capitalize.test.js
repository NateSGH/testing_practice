import capitalize from '../code/capitalize';

test('Capitalize string "hello world"', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
