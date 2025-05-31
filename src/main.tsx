import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/Store.tsx';

import { ApolloProvider } from '@apollo/client';
import client from './lib/apolloClient'; // make sure this path exists
import { AuthProvider } from './contexts/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </ApolloProvider>
);
