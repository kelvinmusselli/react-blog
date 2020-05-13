import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <GlobalStyle />
      <Header />
      <Routes />
      {/* </Provider> */}
    </BrowserRouter>
  );
};
export default App;
