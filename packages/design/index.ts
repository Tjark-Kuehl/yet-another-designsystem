import type { Config } from 'tailwindcss';

const config = {
  content: ['./**/*.{ts,vue}'],
  theme: {
    extend: {},
  },
} satisfies Config;

// eslint-disable-next-line import/no-default-export
export default { config };
