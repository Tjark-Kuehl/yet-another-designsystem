import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    // "@storybook/addon-a11y",
    // "@storybook/addon-essentials",
    // "@storybook/addon-storysource",
    // "@chakra-ui/storybook-addon",
  ],
  core: {
    disableTelemetry: true,
  },
  // docs: {
  //   autodocs: 'tag',
  // },
  features: {
    buildStoriesJson: true,
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: [
    '../../../components/**/*.stories.@(js|ts)',
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
