import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Product from "../components/product"

export default ({ data }) => {
  const product = data.builtOnProduct
  return (
    <Layout>
      <div>
        <h1>{product.name}</h1>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            {product.image && (
              <Img
                fluid={product.image.childImageSharp.fluid}
                loading="eager"
                style={{ maxWidth: 400 }}
              />
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1, display: "flex" }}>
                {product.media.map(media => (
                  <div style={{ flex: 1 }} key={media.childImageSharp.id}>
                    <Img
                      fluid={media.childImageSharp.fluid}
                      loading="eager"
                      style={{ maxWidth: 200 }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1 }}>{product.description}</div>
            <div style={{ flex: 1, fontSize: 30, textAlign: "right" }}>
              <div>
                {product.price} {product.currency}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              {product._sub_products &&
                product._sub_products.map(product => (
                  <Product {...product} key={product.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    builtOnProduct(id: { eq: $id }) {
      name
      description
      price
      currency
      _sub_products {
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
      image {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      media {
        childImageSharp {
          fluid(quality: 100, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
