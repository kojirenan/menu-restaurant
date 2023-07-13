import Nav from 'components/Nav';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import Footer from 'components/Footer';
import { Suspense } from 'react';

function App() {
  return (
    <main className="container">
      <Nav />
      <Header />
      <div className={stylesTheme.container}>
        <Suspense fallback={<p>Carregando...</p>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}

export default App;
