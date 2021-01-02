const visit = require(`unist-util-visit`)
const isRelativeUrl = require(`is-relative-url`)
const fs = require("fs")
const {dirname, posix} = require(`path`)

module.exports = ({
  files,
  getNode,
  markdownAST,
  markdownNode,
  pathPrefix,
  reporter,
}) => {
  const parent = markdownNode.parent
  const parentNode = parent && getNode(parent)
  const parentDir = parentNode && parentNode.dir
  const filesToCopy = new Map()

  visit(markdownAST, `image`, (image) => {
    const ext = image.url.split(`.`).pop()

    if (ext !== "gif" || !parentDir || !isRelativeUrl(image.url)) {
      return
    }

    const imagePath = posix.join(parentDir, image.url)
    const imageNode = files.find((file) => file.absolutePath === imagePath)

    if (imageNode && imageNode.absolutePath) {
      const name = `${imageNode.internal.contentDigest}/${imageNode.name}.${imageNode.extension}`
      const absolutePath = posix.join(process.cwd(), "public", name)
      const relativePath = posix.join(parentDir, image.url)

      image.url = `${pathPrefix || ""}/${name}`
      filesToCopy.set(relativePath, absolutePath)
    }
  })

  Array.from(filesToCopy, ([relativePath, absolutePath]) => {
    if (!fs.existsSync(absolutePath)) {
      try {
        if (!fs.existsSync(dirname(absolutePath))) {
          fs.mkdirSync(dirname(absolutePath))
        }
        fs.copyFileSync(relativePath, absolutePath)
      } catch (e) {
        reporter.warn(`remark-gif: ` + e.message)
      }
    }
  })

  return
}
