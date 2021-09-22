import calculate from './calculate';

describe('calculate function', () => {
  test('returns undefined for calculation with only zero', () => {
    const obj = {
      total: 0,
      next: '0',
      operation: '+',
    };
    const buttonName = '0';
    expect(calculate(obj, buttonName).next).toBeUndefined();
  });

  test('returns both numbers when = is not called', () => {
    const obj = {
      total: 0,
      next: '3',
      operation: '+',
    };
    const buttonName = '2';
    expect(calculate(obj, buttonName).next).toBe('32');
  });
});
