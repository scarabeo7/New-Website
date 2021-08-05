module.exports = {
  siteMetadata: {
    siteUrl: "http://chizim.co.uk/",
    title: "Chizim - Cloud DevOps Engineer",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
