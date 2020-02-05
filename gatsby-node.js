const path = require(`path`)

const productsPath = "/products"

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type BuiltOnProduct implements Node {
      path: String!
    }
  `)
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    BuiltOnProduct: {
      path: {
        resolve: source => path.join(productsPath, source.id),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Creates /products/:id

  const allBuiltOnProduct = await graphql(`
    query {
      allBuiltOnProduct {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  const builtonProducts = allBuiltOnProduct.data.allBuiltOnProduct.edges

  builtonProducts.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        id: node.id,
      },
    })
  })

  // Creates /products-paginated/*

  const allBuiltOnMainProduct = await graphql(`
    query {
      allBuiltOnProduct(filter: { main_product: { eq: true } }) {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  const builtonMainProducts = allBuiltOnMainProduct.data.allBuiltOnProduct.edges

  const productPerPage = 5
  const numPages = Math.ceil(builtonMainProducts.length / productPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      matchPath: i === 0 ? `/products-paginated/*` : undefined,
      path: `/products-paginated/${i + 1}`,
      component: path.resolve("./src/templates/productsPaginated.js"),
      context: {
        limit: productPerPage,
        skip: i * productPerPage,
        numPages,
        currentPage: i + 1,
        basePath: "/products-paginated/",
      },
    })
  })
}
