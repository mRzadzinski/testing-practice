import caesarCipher from './caesarCipher';

test('Basic function: ab -> cd', () => {
  expect(caesarCipher('ab', 2)).toBe('cd');
});

test('Wrapping: xz -> ce', () => {
  expect(caesarCipher('xz', 5)).toBe('ce');
});

test('Negative factor: fuzz distortion octavia wah wah -> ynss wblmhkmbhg hvmtobt pta pta', () => {
  expect(caesarCipher('fuzz distortion octavia wah wah', -7)).toBe(
    'ynss wblmhkmbhg hvmtobt pta pta'
  );
});

test('Maintain case: Jimi Hendrix -> Xwaw Vsbrfwl', () => {
  expect(caesarCipher('Jimi Hendrix', 14)).toBe('Xwaw Vsbrfwl');
});

test('Punctuation: lorem ipsum, dolor-sit amet. -> gjmzh dknph, yjgjm-ndo vhzo.', () => {
  expect(caesarCipher('lorem ipsum, dolor-sit amet.', 21)).toBe(
    'gjmzh dknph, yjgjm-ndo vhzo.'
  );
});
