import operate from "./operate";

describe('Operate Function', () => {
  test('correctly returns 2 when 1 + 1 is summed', () => {
    expect(operate('1', '1', '+')).toBe('2');
  })

  test('correctly returns 2 when 5 is subtracted from 7', () => {
    expect(operate('7', '5', '-')).toBe('2');
  })
})