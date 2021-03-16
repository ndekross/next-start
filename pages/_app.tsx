import { ApolloProvider } from "@apollo/client"
import { useApollo } from "graphql/init.apollo.js"
import "../styles/reset.css"

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps)
  return (
    <ApolloProvider {...{ client }}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
