import {
    ApolloClient,
    InMemoryCache,
} from '@apollo/client';
const cache = new InMemoryCache()

export const client = new ApolloClient({
    cache,
    uri: 'https://portfolio-server8701.herokuapp.com/api/graphql'
});
