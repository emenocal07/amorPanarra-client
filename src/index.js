import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { MessageProviderWrapper } from './context/UserMessage.context';
import { AuthProviderWrapper } from './context/Auth.context';
import { ProductProviderWrapper } from './context/Products.context';
import { CartProviderWrapper } from './context/Cart.context';



ReactDOM.render(
  <Router>
    <CartProviderWrapper>
      <MessageProviderWrapper>
        <ProductProviderWrapper>
          <AuthProviderWrapper>
            <App />
          </AuthProviderWrapper>
        </ProductProviderWrapper>
      </MessageProviderWrapper>
    </CartProviderWrapper>
  </Router>,
  document.getElementById('root')
)
