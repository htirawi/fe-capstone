import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Specials from './components/Specials/Specials';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import menuData from './data/MenuData';

import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          <Route
            path="/menu"
            element={
              <Layout>
                <Specials menu={menuData} />
              </Layout>
            }
          />

          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
