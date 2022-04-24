module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1980px',
    },
    colors: {
      blue: '#a0cced',
      black: '#2e2e30',
      dark: '#6c6c6e',
      white: '#ffffff',
      yellow: '#f5da31',
      brown: '#9a8564',
      gray: '#eaebe6',
    },
    fontFamily: {
      main: ['futura-pt', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
