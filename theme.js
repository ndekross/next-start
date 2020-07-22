import msFunction from "modularscale-js"

function ms(scale) {
  return msFunction(scale, { base: 1.12, ratio: 1.25 }) + "rem"
}

function mss(scale) {
  return msFunction(scale, { base: 1.3, ratio: 1.25 }) + "rem"
}

export const colors = {
  primary: "#b8212d",
  highlight: "#d82634",
}

export const spacing = {
  hMargin: {
    marginLeft: "2.5%",
    marginRight: "2.5%",
    "@media (min-width: 23em)": {
      marginLeft: "5%",
      marginRight: "5%",
    },
  },
  hPadding: {
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    "@media (min-width: 23em)": {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  },
}

export const fonts = {
  body: {
    fontFamily: "IBM Plex Sans",
    fontSize: ms(0),
    lineHeight: 1.35,
    fontKerning: "normal",
    em: {
      fontStyle: "italic",
    },
  },
  title: {
    fontSize: mss(3),
    fontFamily: "Zilla Slab",
    lineHeight: 0.85,
    letterSpacing: -0.15,
  },
  button: {
    fontSize: ms(0),
    display: "inline-block",
    background: colors.primary,
    padding: ".75rem 1rem",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: ms(1),
  },
  heading: {
    fontSize: ms(0),
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1.05,
  },
  subheading: {
    fontWeight: "bold",
  },
  small: {
    fontSize: ms(-1),
    lineHeight: 1.5,
    letterSpacing: 0.5,
  },
  ultrasmall: {
    fontSize: ms(-2),
    lineHeight: 1.3,
    letterSpacing: 0.75,
  },
}

fonts.body.fontFamily +=
  ", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif"
