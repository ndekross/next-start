module.exports = {
  poweredByHeader: false,
  future: {
    webpack5: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.graphql?$/,
      loader: "webpack-graphql-loader",
    })
    return config
  },
}
