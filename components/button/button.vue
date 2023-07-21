<template>
  <button class="text-red-500 border-spacing-1">
    <slot />
  </button>
</template>

<script lang="ts" setup>
// import { type VariantProps, cva } from 'class-variance-authority';
// import { twMerge } from 'tailwind-merge';
// import { computed } from 'vue';

// const buttonVariants = cva('button', {
//   compoundVariants: [
//     { class: 'primaryMedium', intent: 'primary', size: 'medium' },
//   ],
//   variants: {
//     intent: {
//       primary: 'primary',
//       secondary: 'secondary',
//     },
//     size: {
//       medium: 'medium',
//       small: 'small',
//     },
//   },
// });

// type ButtonProps = VariantProps<typeof buttonVariants>;

// const props = withDefaults(
//   defineProps<ButtonProps>(),
//   {
//     intent: 'primary',
//     size: 'medium',
//   },
// );

// const classes = computed(() => twMerge(buttonVariants(props)));
</script>
