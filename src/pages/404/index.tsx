import { useState } from 'react';
import Link from 'next/link';
import { CartHeaderSearch } from 'presentation/components/CartHeaderSearch';
import { Title, PageContainer, MainContainer, Image, ErrorName, BackToHomeText } from './styles';

const Page404 = () => {
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
        <Link href='/'><a><BackToHomeText>&lt;&lt; VOLTAR PARA A HOME</BackToHomeText></a></Link>
        <ErrorName>erro 404</ErrorName>
        <Title>Opa! A página que você está tentando
          acessar não existe ou não está disponível.
          <Image src='/icons/brokenGlass.png' alt='Imagem de erro' />
        </Title>
      </MainContainer>
    </PageContainer>
  )
}

export default Page404;