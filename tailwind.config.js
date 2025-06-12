/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        jet: {
          DEFAULT: '#333333',
          100: '#0a0a0a',
          200: '#141414',
          300: '#1f1f1f',
          400: '#292929',
          500: '#333333',
          600: '#5c5c5c',
          700: '#858585',
          800: '#adadad',
          900: '#d6d6d6',
        },
        harvest_gold: {
          DEFAULT: '#F1AA01',
          100: '#302100',
          200: '#5f4300',
          300: '#8f6401',
          400: '#bf8601',
          500: '#f1aa01',
          600: '#febe28',
          700: '#fece5e',
          800: '#fede93',
          900: '#ffefc9',
        },
        silver: {
          DEFAULT: '#AAAAAA',
          100: '#222222',
          200: '#444444',
          300: '#676767',
          400: '#898989',
          500: '#aaaaaa',
          600: '#bcbcbc',
          700: '#cdcdcd',
          800: '#dddddd',
          900: '#eeeeee',
        },
        'anti-flash_white': {
          DEFAULT: '#F0EFEF',
          100: '#312f2f',
          200: '#635d5d',
          300: '#938c8c',
          400: '#c2bebe',
          500: '#f0efef',
          600: '#f3f2f2',
          700: '#f6f6f6',
          800: '#f9f9f9',
          900: '#fcfcfc',
        },
      },
    },
  },
  plugins: [],
};
