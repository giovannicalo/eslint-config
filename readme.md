# ESLint Settings

[![Build Status](https://github.com/giovannicalo/eslint-config/actions/workflows/build.yml/badge.svg)](https://github.com/giovannicalo/eslint-config/actions/workflows/build.yml)

[ESLint](https://github.com/eslint/eslint) settings.

## Included Plugins

`eslint-plugin-`

* [`babel`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin)
* [`import`](https://github.com/benmosher/eslint-plugin-import)
* [`jest`](https://github.com/jest-community/eslint-plugin-jest)
* [`jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)
* [`node`](https://github.com/mysticatea/eslint-plugin-node)
* [`promise`](https://github.com/xjamundx/eslint-plugin-promise)
* [`react`](https://github.com/yannickcr/eslint-plugin-react)
* [`react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
* [`unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Installation

```bash
npm install giovannicalo/eslint-config
```

> The version published to NPM is outdated. This will install it from GitHub.

## Usage

Create an ESLint settings file as follows.

```javascript
module.exports = { extends: "giovanni" };
```

Depending on the project and the folder, include instead the relevant specific configurations, for instance:

```javascript
module.exports = {
    extends: [
        "giovanni/browser",
        "giovanni/react"
    ]
};
```

In this case, there's no need to include the base settings, as they're already included in the specific ones.

### Available configurations

* Base settings: `giovanni`
* Browser: `giovanni/browser`
* [Node](https://github.com/nodejs/node): `giovanni/node`
* [React](https://github.com/facebook/react): `giovanni/react`
