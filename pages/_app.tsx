import { InjectedConnector, StarknetConfig } from '@starknet-react/core'
import type { AppProps } from 'next/app'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { GRAPHQL_ENDPOINT } from '@/conf/conf';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' } }),
    new InjectedConnector({ options: { id: 'argentX' } }),
  ]

  const httpLink = createHttpLink({
    uri: GRAPHQL_ENDPOINT
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });



  return (
    <StarknetConfig autoConnect connectors={connectors}>
      <ApolloProvider client={client}>
      <Component {...pageProps} />
      </ApolloProvider>
    </StarknetConfig>
  )
}
