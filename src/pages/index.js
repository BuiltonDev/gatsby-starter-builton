import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AstronautImage from "../components/images/astronautImage"
import BuiltonSymbol from "../components/images/builtonSymbol"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ margin: `1.45rem 2rem`, display: `flex` }}>
      <BuiltonSymbol />
      <div
        style={{ fontSize: 200, margin: `130px 0px 0 60px`, color: `#FA6B3F` }}
      >
        ♥
      </div>
      <AstronautImage />
    </div>
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
      <li>
        <Link to="/products/">Go to product page</Link>
      </li>
      <li>
        <Link to="/products-paginated/">Go to product page (paginated)</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
