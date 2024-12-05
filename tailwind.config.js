export default {
  content: ['./*.{js,ts,jsx,tsx,html}', './src/**/*.{js,ts,jsx,tsx,html}', './partials/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    screens: {
      //'mobile': '0px',
      // => @media (min-width: 0px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'large-desktop': '1536px',
       // => @media (min-width: 1536px) { ... }
    },
    /*colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },*/
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
