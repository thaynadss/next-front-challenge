import { useState } from 'react';
import { useRouter } from 'next/router';
import { CartHeaderSearch } from 'presentation/components/CartHeaderSearch';
import { ProductDescription } from './components/ProductDescription';
import { useProductContext } from 'presentation/contexts/ProductContext';
import { ProductImage, PageContainer, MainContainer, BackButton } from './styles';

const ProductPage = () => {
  const { item } = useProductContext();
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [isCartClick, setIsCartClick] = useState(false);
  const [isHamburgerClick, setIsHamburgerClick] = useState(false);
  const router = useRouter();

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
        <BackButton onClick={() => router.back()}>
          <span>&lt;</span>
          Voltar</BackButton>
        <ProductImage src={item.image} alt={item.name} />
        <ProductDescription />
      </MainContainer>
    </PageContainer>
  )
};

export default ProductPage;