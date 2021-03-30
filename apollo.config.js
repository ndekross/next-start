module.exports = {
  client: {
    service: {
      name: "Umberto",
      url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT + "/graphql",
      headers: {
        "X-Auth-Token": process.env.NEXT_PUBLIC_GRAPHQL_API_KEY,
      },
    },
    includes: ["./graphql/**/*.graphql"],
  },
}
