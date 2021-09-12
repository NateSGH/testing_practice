import ceasar from '../code/caesar.js';

test('Cipher "defend the east wall of the castle." with shift 1', () => {
  expect(ceasar('defend the east wall of the castle.', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf.'
  );
});

test('Cipher "zzz, aaa" with shift 5', () => {
  expect(ceasar('zzz, aaa', 5)).toBe('eee, fff');
});
