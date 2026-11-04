/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: '#2A7C13',
          leaf: '#76C457',
        },
        cream: {
          butter: '#FFF8CF',
          peach: '#FBE6C2',
        },
        charcoal: {
          ink: '#1A2E15',
          muted: '#3B5234',
        },
        dark: {
          bg: '#0D170B',
          surface: '#152412',
          workspace: '#1B2E17',
          pill: '#243B1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'emerald-glow': '0 0 20px rgba(118, 196, 87, 0.45)',
        'workspace': '0 20px 50px -12px rgba(26, 46, 21, 0.14)',
      },
    },
  },
  plugins: [],
};
