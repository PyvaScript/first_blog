import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { UserProvider } from './contexts/user.context.jsx';
// import { CategoriesProvider } from './contexts/categories.context.jsx';
// import { CartProvider } from "./contexts/cart.context.jsx";
import { Provider } from "react-redux";
import { reduxStore } from "./redux-store/redux-store.js";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux-store/redux-store.js';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ reduxStore }>
      <PersistGate persistor={ persistor } >
        <BrowserRouter>
          {/* <UserProvider> */}
            {/* <CategoriesProvider> */}
              {/* <CartProvider> */}
              <Elements stripe={ stripePromise }>
                <App />
              </Elements>
              {/* </CartProvider> */}
            {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
