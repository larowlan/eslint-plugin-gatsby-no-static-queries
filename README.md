# ESLint-plugin-Gatsby-No-Static-Queries

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]
<!-- prettier-ignore-end -->

Ensure static queries are not used in Gatsby components
This ensures you can safely use [Conditional page builds](https://www.gatsbyjs.com/docs/conditional-page-builds/).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-gatsby-no-static-queries`:

```
$ npm install eslint-plugin-gatsby-no-static-queries --save-dev
```


## Usage

Add `gatsby-no-static-queries` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "gatsby-no-static-queries"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "gatsby-no-static-queries/nope": "error"
    }
}
```

## Supported Rules

* `nope` Don't use static queries

[build-badge]: https://img.shields.io/travis/larowlan/eslint-plugin-gatsby-no-static-queries.svg?style=flat-square
[build]: https://travis-ci.org/larowlan/eslint-plugin-gatsby-no-static-queries
[version-badge]: https://img.shields.io/npm/v/eslint-plugin-gatsby-no-static-queries.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-plugin-gatsby-no-static-queries
[downloads-badge]: https://img.shields.io/npm/dm/eslint-plugin-gatsby-no-static-queries.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/eslint-plugin-gatsby-no-static-queries
[license-badge]: https://img.shields.io/npm/l/eslint-plugin-gatsby-no-static-queries.svg?style=flat-square
[license]: https://github.com/larowlan/eslint-plugin-gatsby-no-static-queries/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/larowlan/eslint-plugin-gatsby-no-static-queries.svg?style=social
[github-watch]: https://github.com/larowlan/eslint-plugin-gatsby-no-static-queries/watchers
[github-star-badge]: https://img.shields.io/github/stars/larowlan/eslint-plugin-gatsby-no-static-queries.svg?style=social
[github-star]: https://github.com/larowlan/eslint-plugin-gatsby-no-static-queries/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20eslint-plugin-gatsby-no-static-queries%20by%20%40larowlan%20https%3A%2F%2Fgithub.com%2Flarowlan%2Feslint-plugin-gatsby-no-static-queries%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/larowlan/eslint-plugin-gatsby-no-static-queries.svg?style=social



