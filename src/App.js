import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Specials from './components/Specials/Specials';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ReservationPage from './pages/ReservationPage';
import ConfirmReservationPage from './pages/ConfirmReservationPage';
import ConfirmLoginPage from './pages/ConfirmLoginPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';

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

          <Route
            path="/reservation"
            element={
              <Layout>
                <ReservationPage />
              </Layout>
            }
          />

          <Route
            path="/reservation-confirmed"
            element={
              <Layout>
                <ConfirmReservationPage />
              </Layout>
            }
          />

          <Route
            path="/login"
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />

          <Route
            path="/logged-in"
            element={
              <Layout>
                <ConfirmLoginPage />
              </Layout>
            }
          />

          <Route
            path="/order"
            element={
              <Layout>
                <OrderPage />
              </Layout>
            }
          />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
