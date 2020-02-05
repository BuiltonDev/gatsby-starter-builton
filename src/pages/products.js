import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Product from "../components/product"

export default ({ data }) => {
  const products = data.products.nodes
  return (
    <Layout>
      <div>
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    products: allBuiltOnProduct(filter: { main_product: { eq: true } }) {
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
