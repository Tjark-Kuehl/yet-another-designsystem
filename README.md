# yet-another-designsystem (YAD)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/yet-another-designsystem/blob/main/LICENSE)

yet-another-designsystem (YAD) is a state-of-the-art design system built with Vue.js and TypeScript. It aims to showcase best practices and modern programming techniques. The design system provides a set of reusable components and utilities that can be easily integrated into your Vue.js projects.

## Features

- Modern and clean design
- Reusable UI components
- Consistent styling and theming
- Fully compatible with Vue 3
- Comprehensive documentation with Storybook
- Thoroughly tested with Vitest unit tests

## Installation

You can install YAD via pnpm:

```bash
pnpm install yet-another-designsystem
```

## Usage

To start using YAD in your Vue.js project, import the desired components or utilities and register them as needed. Here's a simple example:

```vue
<template>
  <div>
    <Button @click="handleClick">Click me!</Button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Button } from 'yet-another-designsystem';

export default defineComponent({
  components: {
    Button,
  },
  methods: {
    handleClick() {
      // Handle button click event
    },
  },
});
</script>

<style>
/* Add your custom styles here */
</style>
```

Make sure to consult the [documentation](#documentation) and [storybook](#storybook) for more detailed usage instructions and examples.

## Documentation

The complete documentation for YAD is available in the [docs](./docs) directory of this repository. It covers installation instructions, usage examples, component API references, theming, and more. To view the documentation locally, you can clone this repository and open the `index.html` file located in the `docs` directory in your browser.

Online documentation: [https://your-username.github.io/yet-another-designsystem](https://your-username.github.io/yet-another-designsystem)

## Storybook

YAD provides a comprehensive Storybook for visualizing and interacting with the available components and utilities. The Storybook showcases different variations and states of the components, making it easier to understand their functionality and usage.

To run the Storybook locally, clone this repository, navigate to the project's root directory, and run the following commands:

```bash
pnpm install
pnpm run storybook
```

The Storybook will be available at [http://localhost:6006](http://localhost:6006) in your browser.

## Testing

YAD includes unit tests to ensure the stability and reliability of its components and utilities. The tests are built using the Vite testing framework. To run the tests, use the following command:

```bash
pnpm run test
```

## License

This project is licensed under the [MIT license](./LICENSE). Feel free to use and modify the code according to your needs.

---

We hope that yet-another-designsystem (YAD) helps you build amazing Vue.js applications with the latest programming practices and best practices. If you have any questions, suggestions, or issues, please don't hesitate to open an issue or submit a pull request. Enjoy!
