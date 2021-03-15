import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../apollo"
import "../styles/reset.css"

function MyApp({ Component, pageProps }) {
  const client = useApollo()
  return (
    <ApolloProvider {...{ client }}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
