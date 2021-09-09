import { expect } from '@jest/globals';
import reverseString from '../code/reverseString.js';

test('reverse string "hello world"', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverse string "Dracula"', () => {
  expect(reverseString('Dracula')).toBe('alucard');
});
