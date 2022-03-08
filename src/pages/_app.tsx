import type { AppProps } from 'next/app';
import { CartProvider } from 'presentation/contexts/CartContext';
import { CatalogProvider } from 'presentation/contexts/CatalogContext';
import { ProductProvider } from 'presentation/contexts/ProductContext';
import GlobalStyle from 'styles/globalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <CatalogProvider>
        <CartProvider>
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
        </CartProvider>
      </CatalogProvider>
    </QueryClientProvider>
  )
}

export default MyApp;
