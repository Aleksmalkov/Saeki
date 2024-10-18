import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';  // Tailwind styles
import './styles/custom.css';     // Custom styles
import App from './App';          // App that references AppRouter
import reportWebVitals from './reportWebVitals';
import ApolloProviderWrapper from './services/apolloClient'; // Apollo Provider
import { Provider } from 'react-redux';                     // Redux Provider
import { store } from './state/store';                      // Redux Store
import { BrowserRouter } from "react-router-dom";           // React Router DOM BrowserRouter
import ErrorBoundary from "./components/ErrorBoundary"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProviderWrapper>
        <BrowserRouter> {/* Wrap the app with BrowserRouter */}
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ApolloProviderWrapper>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
