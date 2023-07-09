import Input from './input.vue'

export default {
  title: 'Components/Input',
  component: Input,
}

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: `
    <h1>Test</h1>
    <Input v-bind="args" />
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
