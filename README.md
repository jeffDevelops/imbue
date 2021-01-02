# Imbue

A component-library and design system for React.

## Installation

```
npm i --save @imbuejs/core
```

...or...

```
yarn add @imbuejs/core
```

It's recommended to have `styled-components` installed, as well. We use it within the library to provide a `Theme` object to all of the components in the library, and it's how you'll extend styles of visual components.
Imbue does not expose class names!

## Usage

All components and utilities are available as named exports from `@imbuejs/core` as in

```
import { Button, TextInput } from '@imbuejs/core'
```

But, to achieve the smallest possible bundle sizes for your application, you'll rather want to take only what you need:

```
import Button from '@imbuejs/core/Button'
import TextInput from '@imbuejs/core/TextInput'
```

## Contributing

You'll want to use `yarn` as your package manager. The scripts to symlink the project locally all rely on yarn, and you cannot mix and match local
symlinks between package managers.

Fork the repo.

Install the dev-dependencies:

```
yarn
```

In one tab, run the watch script to bundle the library on file changes:

```
yarn build:watch
```

In another, test locally by creating local symlinks between the library and the example projects (included in the repo) and ensuring one copy of `react` and `react-dom` are being used throughout (this prevents misleading Rules of Hooks errors):

```
yarn local
```

If all is as it should be, the build folder should have a package.json at its root identical to the library's root package.json, and after running `yarn` in whichever test-env project you'd like to test in, the `node_modules/@imbuejs/core` folder should have the contents of the `build` directory at its root (there should NOT be a `build/` folder at the root). This ensures that the local symlinked library's imports behave identically to those within the library installed from the registry.
When you start the dev server for the consuming application, it should recompile when changes are made to the library code.

To run the tests:

```
yarn test [ModuleName]
```

To run Storybook:

```
yarn storybook
```
