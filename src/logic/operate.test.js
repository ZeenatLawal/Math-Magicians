import operate from './operate';

describe('Operate Function', () => {
  test('correctly returns 2 when 1 + 1 is summed', () => {
    expect(operate('1', '1', '+')).toBe('2');
  });

  test('correctly returns 2 when 5 is subtracted from 7', () => {
    expect(operate('7', '5', '-')).toBe('2');
  });

  test('correctly returns 5 when 50 is divided by 10', () => {
    expect(operate('50', '10', '÷')).toBe('5');
  });

  test("correctly returns Can't divide by 0 when 50 is divided by 0", () => {
    expect(operate('50', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('correctly returns 49 when 7 is multiplied by 7', () => {
    expect(operate('7', '7', 'x')).toBe('49');
  });

  test('correctly returns remainder 2 when 20 is divided by 6', () => {
    expect(operate('20', '6', '%')).toBe('2');
  });
});
