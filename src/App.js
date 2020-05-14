import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Provider>
  );
};
export default App;
