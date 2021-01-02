module.exports = {
  plugins: [
    "gatsby-plugin-slug",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            // resolve: "gatsby-remark-gifs",
            resolve: require.resolve(`..`),
          },
        ],
      },
    },
  ],
}
