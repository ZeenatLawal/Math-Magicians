import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('displays the number clicked', () => {
    render(<Calculator />);

    const twoBtn = screen.getByText('2');
    const resultPara = screen.getByRole('none');
    fireEvent.click(twoBtn);

    expect(resultPara.textContent).toBe('2');
  });

  test('displays operation clicked', () => {
    render(<Calculator />);

    const plusBtn = screen.getByText('+');
    const resultPara = screen.getByRole('none');
    fireEvent.click(plusBtn);

    expect(resultPara.textContent).toBe('0+');
  });

  test('displays correct summation', () => {
    render(<Calculator />);
    const twoBtn = screen.getByText('2');
    const threeBtn = screen.getByText('3');
    const plusBtn = screen.getByText('+');
    const equalBtn = screen.getByText('=');

    const resultPara = screen.getByRole('none');
    fireEvent.click(twoBtn);
    fireEvent.click(plusBtn);
    fireEvent.click(threeBtn);
    fireEvent.click(equalBtn);

    expect(resultPara.textContent).toBe('5');
  });
});
