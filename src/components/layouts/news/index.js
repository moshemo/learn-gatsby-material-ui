import React from 'react'
import PropTypes from 'prop-types'

import { Link, StaticQuery, graphql } from 'gatsby'

const NewsLayout = ({ children }) => (
  <StaticQuery query={LAYOUT_QUERY} render={LAYOUT_MARKUP} />
)

const LAYOUT_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const LAYOUT_MARKUP = data => (
  <>
    <Header siteTitle={data.site.siteMetadata.title} />

    <Archive />

    <main>
      {children}
    </main>

    <footer>
      © {new Date().getFullYear()}, Built with
        {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>

  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NewsLayout
