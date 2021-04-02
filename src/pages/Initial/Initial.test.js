import { render, screen } from '@testing-library/vue';
import Initial from './Initial.vue';

describe('Initial Component', () => {
  it('should have an heading', () => {
    render(Initial, { stubs: ['RouterLink'] });

    expect(
      screen.getByRole('heading', { name: /teste initial/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /counter/i })).toBeInTheDocument();
  });
});
