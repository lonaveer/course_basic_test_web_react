import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../../../app/components/Counter';

describe('Counter', () => {
  it('should increase the count by 1 when the increase button is clicked', async () => {
    render(<Counter />);
    const increaseButton = screen.getByRole('button', { name: /increase/i });
    await userEvent.click(increaseButton);
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('should decrease the count by 1 when the decrease button is clicked', async () => {
    render(<Counter />);
    const decreaseButton = screen.getByRole('button', { name: /decrease/i });
    await userEvent.click(decreaseButton);
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
  });
});