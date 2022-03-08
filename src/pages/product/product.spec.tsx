import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductPage from './[product]';
import contextRender from 'presentation/tests/contextRender';
import { useRouter } from 'next/router';

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe('<ProductPage />', () => {
  const { catalogAndCartAndProduct } = contextRender({});

  it('should redirect to the previous page when the back button is clicked', async () => {
    const back = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      back,
    }));

    catalogAndCartAndProduct(<ProductPage />);
    const backButton = screen.getByRole('button', { name: /voltar/i });

    userEvent.click(backButton);

    expect(back).toHaveBeenCalledTimes(1);
  });
});
