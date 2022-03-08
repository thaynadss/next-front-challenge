import {
  WineBoxButton,
  SmallSearchButton,
  SearchButton,
  Logo,
  IconsContainer,
  HeaderContainer,
  HamburguerMenu,
  CounterWineBox,
  AccountButton,
  Container
} from './styles';
import Link from 'next/link';
import { NavigationItems } from 'presentation/components/NavigationItems';
import { useCatalogContext } from 'presentation/contexts/CatalogContext';
import { useCartContext } from 'presentation/contexts/CartContext';
import { HeaderProps } from 'presentation/components/CartHeaderSearch';

export const Header = ({ isSearchClick, isCartClick, isHamburgerClick, handleIsHamburgerClick, handleIsSearchClick, handleIsCartClick, }: HeaderProps) => {
  const searchIcon = isSearchClick ? 'pinkSearch.png' : 'search.svg';
  const { catalogDispatch } = useCatalogContext();
  const { cartState: { cart } } = useCartContext();

  const handleOpenCloseModal = (search: boolean, cart: boolean, hamburger: boolean) => {
    handleIsSearchClick(search);
    handleIsCartClick(cart);
    handleIsHamburgerClick(hamburger);
  };

  const handleHomePage = () => {
    catalogDispatch({
      type: 'SEARCHED_TEXT',
      payload: ''
    });
    handleOpenCloseModal(false, false, false);
  };

  return (
    <Container>
      <HeaderContainer>
        <IconsContainer gap={1.5}>
          <HamburguerMenu src='/icons/hamburgerMenu.svg' alt='Menu' onClick={() => handleOpenCloseModal(false, false, !isHamburgerClick)} />
          <Link href='/'><a><Logo src='/icons/logo.svg' alt='Logo' onClick={handleHomePage} /></a></Link>
        </IconsContainer>

        <NavigationItems isHeader={true} />

        <IconsContainer gap={0.8}>
          <SearchButton src={`/icons/${searchIcon}`} alt='Pesquisar' onClick={() => handleOpenCloseModal(!isSearchClick, false, false)} />
          <SmallSearchButton src='/icons/smallSearch.svg' alt='Pesquisar' onClick={() => handleOpenCloseModal(!isSearchClick, false, false)} />
          <AccountButton src='/icons/account.svg' alt='Conta' />
          <WineBoxButton data-testid='wineBoxButton' onClick={() => handleOpenCloseModal(false, !isCartClick, false)}>
            <CounterWineBox>{cart.length}</CounterWineBox>
          </WineBoxButton>
        </IconsContainer>
      </HeaderContainer>
    </Container >
  );
};