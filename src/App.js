import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ProfileProvider } from './context/profileContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

const App = () => (
  <Provider store={store}>
    <ProfileProvider>
      <Router>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </Router>
    </ProfileProvider>
  </Provider>
);

export default App;
