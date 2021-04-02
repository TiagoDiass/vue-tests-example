import { render, screen } from '@testing-library/vue';
import Initial from './Initial.vue';

describe('Initial Component', () => {
  it('should render correctly', () => {
    render(Initial, { stubs: ['RouterLink'] });

    expect(
      screen.getByRole('heading', { name: /teste initial/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/counter/i)).toBeInTheDocument();
  });
});
