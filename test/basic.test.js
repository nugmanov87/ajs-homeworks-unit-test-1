import showHealth from '../src/js/app';

test('check critical', () => {
  const input = { name: 'Маг', health: 10 };
  const expected = 'critical';
  const received = showHealth(input);

  expect(received).toBe(expected);
});

test('check wounded', () => {
  const input = { name: 'Маг', health: 50 };
  const expected = 'wounded';
  const received = showHealth(input);

  expect(received).toBe(expected);
});

test('check healthy', () => {
  const input = { name: 'Маг', health: 100 };
  const expected = 'healthy';
  const received = showHealth(input);

  expect(received).toBe(expected);
});

test('check input', () => {
  const input = { name: 'Маг', health: 'magitian' };
  const expected = 'Ошибка. Значение может быть числом от 0 до 100';
  const received = showHealth(input);

  expect(received).toBe(expected);
});
