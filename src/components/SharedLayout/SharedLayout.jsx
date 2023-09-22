import { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import WebFont from 'webfontloader';
import './SharedLayout.css';

export const SharedLayout = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Raleway'],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="main">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </>
  );
};
