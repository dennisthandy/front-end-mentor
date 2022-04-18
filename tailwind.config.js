module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './fragments/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-gray': 'hsl(0, 0%, 95%)',
        'dark-cyan-2': 'hsl(185, 75%, 39%)',
        'dark-grayish-blue-2': 'hsl(227, 10%, 46%)',
        'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
      },
      fontSize: {
        '12px': '12px',
        '13px': '13px',
        '15px': '15px',
        '18px': '18px',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'big-shoulders-display': ['Big Shoulders Display', 'cursive'],
        spartan: ['Spartan', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backdropOpacity: ['hover', 'focus'],
    },
  },
  plugins: [],
};
