import {
  SubmitButton,
  SearchLabel,
  SearchForm,
  ScreenContainer,
  PageBackground,
  Input
} from './styles';
import { useRouter } from 'next/router';
import { KeyboardEvent, useState } from 'react';
import { useCatalogContext } from 'presentation/contexts/CatalogContext';

type Props = {
  isSearchClick: boolean;
  handleIsSearchClick: (close: boolean) => void;
};

export const SearchInput = ({ isSearchClick, handleIsSearchClick }: Props) => {
  const [searchedText, setSearchedText] = useState('');
  const { catalogDispatch } = useCatalogContext();
  const router = useRouter();

  const handleClickSearch = () => {
    if (searchedText !== '') {
      catalogDispatch({
        type: 'SEARCHED_TEXT',
        payload: `name=${searchedText.trim()}`
      })
      handleIsSearchClick(false);
      setSearchedText('');
      router.push('/');
    }
  };

  const handleKeyboardSearch = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleClickSearch()
    }
  };

  return (
    <ScreenContainer isSearchClick={isSearchClick} >
      <SearchForm>
        <SearchLabel>
          <Input
            type='text'
            value={searchedText}
            placeholder='Pesquisar'
            onChange={e => setSearchedText(e.target.value)}
            onKeyUp={handleKeyboardSearch}
          />
          <span>aperte enter para buscar</span>
          <SubmitButton onClick={handleClickSearch}
            src='/icons/smallPinkSearch.svg' alt='Botão de busca' />
        </SearchLabel>
      </SearchForm>
      <PageBackground data-testid='screen' onClick={() => handleIsSearchClick(false)} />
    </ScreenContainer>
  )
}