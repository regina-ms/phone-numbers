import validatePhoneNumber from '../validatePhoneNumber';

test('should return +860000000000', () => {
  const result = validatePhoneNumber('+86 000 000 0000');
  expect(result).toBe('+860000000000');
});

test('should return +79270000000', () => {
  const result = validatePhoneNumber('8 (927) 000-00-00');
  expect(result).toBe('+79270000000');
});
