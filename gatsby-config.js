module.exports = {
  siteMetadata: {
    title: "tomosushi",
    author: "sojack",
    description: "Japanese Cousine",
    siteUrl: "http://tomosushi.ca",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tomosushi`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve:"gatsby-plugin-gatsby-cloud",
      options:{
        allPageHeaders:[
          "X-Frame-Options: SAMEORIGIN",
        ],
      }
    }
  ],
};
