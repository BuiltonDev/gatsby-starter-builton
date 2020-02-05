import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Product = ({ id, name, path, image }) => (
  <div key={id}>
    <Link to={path}>
      {image && (
        <Img
          fluid={image.childImageSharp.fluid}
          loading="eager"
          style={{ maxWidth: 50 }}
        />
      )}
      <b>{name}</b>
    </Link>
  </div>
)

export default Product
