import Counter from './Counter.vue';
import { render, screen } from '@testing-library/vue';

describe('Counter', () => {
  it('should render correctly', () => {
    render(Counter);

    expect(
      screen.getByRole('heading', { name: /counter: 0/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /increment/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /decrement/i })
    ).toBeInTheDocument();
  });
});
