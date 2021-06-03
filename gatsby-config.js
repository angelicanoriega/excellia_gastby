module.exports = {
    plugins: [`gatsby-plugin-sass`,
    {
        resolve: `gatsby-source-strapi`,
        options: {
          apiURL: `http://localhost:1337`,
          queryLimit: 1000, // Defaults to 100
          collectionTypes: [`menu-1-s`, `menu-2-s`],
          singleTypes: [`seo`],
        },
      },
    ],
}