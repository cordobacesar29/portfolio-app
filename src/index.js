import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import './index.css';
import App from './App';

import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <ChakraProvider>
    <Router>
      <App />
    </Router>
    </ChakraProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);