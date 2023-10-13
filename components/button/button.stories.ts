import Button from './button.vue';

export default {
  component: Button,
  title: 'Components/Button',
};

const Template = (arguments_) => ({
  components: { Button },
  setup() {
    return { args: arguments_ };
  },
  template: `
    <h1>Test</h1>
    <Button v-bind="args" />
  `,
});

export const Default = {
  args: {
    default: `
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua.
    `,
    trigger: 'Open sesame!',
    triggerPosition: undefined,
  },

  render: Template,
};
