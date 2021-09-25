import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from './Providers/ProductsProvider';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
    <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
