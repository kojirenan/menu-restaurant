import Nav from 'components/Nav';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import Footer from 'components/Footer';

function App() {
  return (
    <main className="container">
      <Nav />
      <Header />
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
