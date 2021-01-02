const {resolve} = require("path")

exports.createPages = async ({graphql, actions: {createPage}, reporter}) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panic(result.errors)
  }

  try {
    const {allMarkdownRemark} = result.data

    if (allMarkdownRemark) {
      allMarkdownRemark.nodes.forEach(({fields: {slug}}) => {
        createPage({
          path: slug,
          component: resolve("src/templates/page.js"),
        })
      })
    }
  } catch (e) {
    reporter.panic(`source-google-docs: ` + e.message)
  }
}
