# ESLint Settings

[![Build Status](https://github.com/giovannicalo/eslint-config/actions/workflows/build.yml/badge.svg)](https://github.com/giovannicalo/eslint-config/actions/workflows/build.yml)

[ESLint](https://github.com/eslint/eslint) settings.

## Included Plugins

* [`@babel/eslint-plugin`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin)
* [`@stylistic/eslint-plugin`](https://github.com/eslint-stylistic/eslint-stylistic/tree/main/packages/eslint-plugin)
* [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
* [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
* [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)
* [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)
* [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
* [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
* [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
* [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Installation

```bash
npm install giovannicalo/eslint-config
```

> The version published to NPM is outdated. This will install it from GitHub.

## Usage

Create an `eslint.config.js` file as follows.

```javascript
const config = require("eslint-config-giovanni");

module.exports = config;
```

Depending on the project and the folder, include instead the relevant specific configuration, for instance:

```javascript
const { react } = require("eslint-configuration-giovanni");

module.exports = react;
```

### Available configurations

* Base settings: the `default` import
* Browser: `browser`
* [Node](https://github.com/nodejs/node): `node`
* [React](https://github.com/facebook/react) (includes Browser): `react`

These settings can be further overridden as normal, for instance:

```javascript
const { node } = require("eslint-configuration-giovanni");

module.exports = [...node, {
	rules: { camelcase: "off" }
}];
```
