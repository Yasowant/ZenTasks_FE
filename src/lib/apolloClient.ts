import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://todo-backend-y42y.onrender.com/api/v1/graphql',
  cache: new InMemoryCache(),
});

export default client;
