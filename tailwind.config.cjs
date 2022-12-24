/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    gridRow: {
      'span-12': 'span 12 / span 12',
    },
    gridColumn: {
      'span-12': 'span 12 / span 12',
    },
    extend: {
      colors: {
        'white': '#E9EFF3',
        'blue-accent': '#0074E8',
        'midnight': '#0B1929',
        'blue-dark': '#011E3C',
        'blue-border': '#153150',
        'orange': '#FF9100',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
