import "dekross-css-reset"
import { injectGlobal } from "emotion"
import { fonts } from "theme"
import Head from "next/head"

injectGlobal({
  "@viewport": {
    width: "device-width",
  },
  html: {
    fontSize: "100%",
    "@media (min-width: 75em)": {
      fontSize: "120%",
    },
    "@media (min-width: 120em)": {
      fontSize: "150%",
    },
  },
  body: {
    ...fonts.body,
    overflowX: "hidden",
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400&family=Zilla+Slab:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
