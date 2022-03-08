import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import contextRender from 'presentation/tests/contextRender';
import { SearchInput } from '.';
import { useRouter } from 'next/router';

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe('<SearchInput />', () => {
  const handleIsSearchClick = jest.fn();
  const { catalog, catalogDispatch } = contextRender({});
  const push = jest.fn();
  (useRouter as jest.Mock).mockImplementation(() => ({
    push,
  }));

  afterEach(() => {
    jest.clearAllMocks()
  });

  it('should search the products by the text typed in the input when the keyboard enter key is pressed and should redirect to the home page', () => {
    catalog(<SearchInput isSearchClick={true} handleIsSearchClick={handleIsSearchClick} />);

    const input = screen.getByPlaceholderText(/pesquisar/i);

    userEvent.type(input, 'vinho');
    keyboard('{Enter}')

    expect(catalogDispatch).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/');
    expect(handleIsSearchClick).toHaveBeenCalledWith(false);
  });

  it('should not do anything if there is no text in the input when the search button is clicked', () => {
    catalog(<SearchInput isSearchClick={true} handleIsSearchClick={handleIsSearchClick} />);

    const button = screen.getByAltText('Botão de busca');

    userEvent.click(button);

    expect(catalogDispatch).not.toHaveBeenCalled();
  });

  it('should search the products by the text typed in the input when the search button is clicked and should redirect to the home page', () => {
    catalog(<SearchInput isSearchClick={true} handleIsSearchClick={handleIsSearchClick} />);

    const input = screen.getByPlaceholderText(/pesquisar/i);
    const button = screen.getByAltText('Botão de busca');

    userEvent.type(input, 'vinho');
    userEvent.click(button);

    expect(catalogDispatch).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/');
    expect(handleIsSearchClick).toHaveBeenCalledWith(false);
  });

  it('should call function when it is clicked outside the search box container', () => {
    catalog(<SearchInput isSearchClick={true} handleIsSearchClick={handleIsSearchClick} />);

    const screenOutside = screen.getByTestId('screen');

    userEvent.click(screenOutside);

    expect(handleIsSearchClick).toHaveBeenCalledWith(false);
  });
});