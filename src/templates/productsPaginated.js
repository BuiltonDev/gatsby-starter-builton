import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Product from "../components/product"

export default ({ data, pageContext: context }) => {
  const products = data.products.nodes
  return (
    <Layout>
      <div>
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <div style={{ padding: "20px 0" }}>
        <a
          href={context.basePath}
          style={{ textDecoration: "none", color: "black" }}
        >
          &laquo;
        </a>
        {Array.from({ length: context.numPages }).map((_, i) => (
          <a
            href={`${context.basePath}${i + 1}`}
            key={`pagination${i}`}
            style={{
              color: "black",
              padding: "8px 16px",
              textDecoration: "none",
              fontWeight: i + 1 === context.currentPage ? "bold" : "normal",
            }}
          >
            {i + 1}
          </a>
        ))}
        <a
          href={context.numPages}
          style={{ textDecoration: "none", color: "black" }}
        >
          &raquo;
        </a>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    products: allBuiltOnProduct(
      filter: { main_product: { eq: true } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        name
        path
        description
        image {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
