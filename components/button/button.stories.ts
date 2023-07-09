import Button from './button.vue'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <h1>Test</h1>
    <Button v-bind="args" />
  `,
});

export const Default = {
  render: Template,

  args: {
    triggerPosition: undefined,
    trigger: 'Open sesame!',
    default: `
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua.
    `,
  },
};
