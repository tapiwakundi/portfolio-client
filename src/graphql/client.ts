import {
    ApolloClient,
    InMemoryCache,
} from '@apollo/client';
const cache = new InMemoryCache()

export const client = new ApolloClient({
    cache,
    uri: 'http://localhost:8000/api/graphql'
});
