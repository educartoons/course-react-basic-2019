# Fonts for our Setup

Dank Mono

Fira Code

# Tooling

## Prettier

Intall Prettier

```
npm i -D prettier
```

Visual Studio Code

- Install Prettier Extension

Visual Studio Code > preferences > enable

- Format on save

Create .prettierrc file

## ESLint

Install EsLint

```
npm i -D eslint eslint-config-prettier
```

Create .eslintrc.json file

## Parcel

Install Parcel

```
npm i -D parcel-bundler
```

Run in the console

```
npm run dev
```

## Configuring ESLint for React

Install

```
npm run -D babel-eslint eslint-plugin-import eslint-plugin-js-a11y eslint-plugin-react
```

## Configuring ESLint for Hooks

This is the oficial plugin for React Hooks

```
npm run -D eslint-plugin-react-hooks
```

## We setup Parcel for supporting Async functions

```json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 ChromeAndroid versions",
    "last 2 Firefox versions",
    "last 2 FirefoxAndroid versions",
    "last 2 Safari versions",
    "last 2 iOS versions",
    "last 2 Edge versions",
    "last 2 Opera versions",
    "last 2 OperaMobile versions"
  ]
}
```
