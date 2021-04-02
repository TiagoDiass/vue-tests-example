import Counter from './Counter.vue';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/vue';

describe('Counter', () => {
  it('should render correctly', () => {
    render(Counter);

    expect(screen.getByRole('heading')).toHaveTextContent('Counter: 0');
    expect(
      screen.getByRole('button', { name: /increment/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /decrement/i })
    ).toBeInTheDocument();
  });

  it('should increment when user clicks on the increment button', async () => {
    render(Counter);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    userEvent.click(incrementButton);

    const counterHeading = await screen.findByRole('heading');
    expect(counterHeading).toHaveTextContent('Counter: 1');

    await userEvent.click(incrementButton);
    expect(counterHeading).toHaveTextContent('Counter: 2');
  });

  it('should decrement when user clicks on decrement button', async () => {
    render(Counter);
    const decrement = screen.getByRole('button', { name: /decrement/i });
    userEvent.click(decrement);

    const counterHeading = await screen.findByRole('heading');
    expect(counterHeading).toHaveTextContent('Counter: -1');
  });
});
