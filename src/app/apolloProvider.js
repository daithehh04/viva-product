'use client'
import client from '@/lib/apollo-client'
import { ApolloProvider } from '@apollo/client'

function ApolloClientProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloClientProvider
