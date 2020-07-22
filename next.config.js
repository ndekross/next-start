const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png", "webp", "gif"],
      },
    ],

    // your other plugins here
  ],
  {
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      })
      return config
    },
  }
)
