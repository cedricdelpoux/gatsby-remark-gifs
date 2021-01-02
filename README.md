# gatsby-remark-gifs

[![Npm version][badge-npm]][npm]
[![Npm downloads][badge-npm-dl]][npm]
[![MIT license][badge-licence]](./LICENCE.md)
[![PRs welcome][badge-prs-welcome]](#contributing)

---

`gatsby-remark-gifs` is a [Gatsby](https://www.gatsbyjs.org/) remark plugin to make .gif images work

## Usage

1. Download `gatsby-remark-gifs` from the NPM registry:

```shell
yarn add gatsby-remark-gifs
```

2. Add the plugin to your `gatsby-config.js` file

```js
module.exports = {
    plugins: [
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: ["gatsby-remark-gifs"],
            },
        },
    ],
}
```

3. Add gifs in your content

```markdown
![My gif](./awesome.gif)
```

## Contributing

-   ⇄ Pull/Merge requests and ★ Stars are always welcome.
-   For bugs and feature requests, please [create an issue][github-issue].

[badge-npm]: https://img.shields.io/npm/v/gatsby-remark-gifs.svg?style=flat-square
[badge-npm-dl]: https://img.shields.io/npm/dt/gatsby-remark-gifs.svg?style=flat-square
[badge-licence]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[badge-prs-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[npm]: https://www.npmjs.org/package/gatsby-remark-gifs
[github-issue]: https://github.com/cedricdelpoux/gatsby-remark-gifs/issues/new
