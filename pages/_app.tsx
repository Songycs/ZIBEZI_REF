import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '@/components/common/navBar';
import SearchBar from '@/components/layout/gallery/searchBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
