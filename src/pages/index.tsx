import { useState } from 'react';
import { PageContainer, MainContainer } from './home/styles';
import { FilterByPrice } from './home/components/FilterByPrice';
import { ProductsDisplay } from './home/components/ProductsDisplay';
import { CartHeaderSearch } from 'presentation/components/CartHeaderSearch';

export default function Home() {
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [isCartClick, setIsCartClick] = useState(false);
  const [isHamburgerClick, setIsHamburgerClick] = useState(false);

  const handleIsSearchClick = (close: boolean) => {
    setIsSearchClick(close);
  };

  const handleIsCartClick = (close: boolean) => {
    setIsCartClick(close);
  };

  const handleIsHamburgerClick = (close: boolean) => {
    setIsHamburgerClick(close);
  };

  return (
    <PageContainer closed={!isSearchClick && !isCartClick && !isHamburgerClick}>
      <CartHeaderSearch isSearchClick={isSearchClick} isCartClick={isCartClick} handleIsSearchClick={handleIsSearchClick} handleIsCartClick={handleIsCartClick} isHamburgerClick={isHamburgerClick} handleIsHamburgerClick={handleIsHamburgerClick} />
      <MainContainer>
        <FilterByPrice />
        <ProductsDisplay />
      </MainContainer>
    </PageContainer>
  )
};
