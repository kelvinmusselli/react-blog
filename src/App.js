import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <Header />
      <Routes />
    </Provider>
  );
};
export default App;
