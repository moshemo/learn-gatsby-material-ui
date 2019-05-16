module.exports = {
  siteMetadata: {
    title: 'Gatsby - Material UI',
    description: 'A site designed to learn both Gatsby and Material UI',
    author: 'Moshe Morris'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-top-layout',
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    { gatsby_plugin__manifest },
    { gatsby_plugin__material_ui },
    { gatsby_source__file_system__images },
    { gatsby_source__file_system__posts },
  ],
};


const gatsby_plugin__manifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  },
}

const gatsby_plugin__material_ui = {
  resolve: 'gatsby-plugin-material-ui',
  // If you want to use styled components you should change the injection order.
  options: {
    // stylesProvider: {
    //   injectFirst: true,
    // },
  },
}

const gatsby_source__file_system__images = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images`,
  },
}

const gatsby_source__file_system__posts = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `posts`,
    path: `${__dirname}/src/posts/`,
  },
}