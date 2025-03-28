const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#FCE2D9', 100: '#F9CCA9', 200: '#F6B67A', 300: '#F39F4B', 400: '#F0881B', 500: '#EE5533', 600: '#EB2203', 700: '#C61E03', 800: '#961804', 900: '#660E04' },
        secondary: { 50: '#E5E5F6', 100: '#B2B2D8', 200: '#8080BB', 300: '#4D4DBD', 400: '#4040AA', 500: '#3535B8', 600: '#2929A5', 700: '#1C1CA2', 800: '#101089', 900: '#040475' },
        success: { 50: '#E6F6E6', 100: '#C2E6C2', 200: '#9ED69E', 300: '#7BC67B', 400: '#57B757', 500: '#33A833', 600: '#2E982E', 700: '#297D29', 800: '#246D24', 900: '#1F5E1F' },
        warning: { 50: '#FFF7E6', 100: '#FFE2C2', 200: '#FFCE9E', 300: '#FFB97B', 400: '#FFA557', 500: '#FF9033', 600: '#E6822E', 700: '#C97529', 800: '#A66724', 900: '#855A1F' },
        danger: { 50: '#FFE6E6', 100: '#FFC2C2', 200: '#FF9E9E', 300: '#FF7B7B', 400: '#FF5757', 500: '#FF3333', 600: '#E82E2E', 700: '#C72929', 800: '#A62424', 900: '#851F1F' }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'paylus',
      addCommonColors: true,
      defaultTheme: 'dark',
      defaultExtendTheme: 'dark',

      // Main layout
      layout: {
        spacingUnit: 4,
        disabledOpacity: '.5',
        dividerWeight: '1px',

        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem'
        },

        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem'
        },

        radius: {
          small: '8px',
          medium: '12px',
          large: '14px'
        },

        borderWidth: {
          small: '1px',
          medium: '2px',
          large: '3px'
        }
      },

      themes: {
        // Light Mode
        light: {
          layout: {
            boxShadow: {
              small: '0px 0px 5px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)',
              medium: '0px 0px 15px 0px rgba(0, 0, 0, 0.2), 0px 2px 30px 0px rgba(0, 0, 0, 0.3), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)',
              large: '0px 0px 30px 0px rgba(0, 0, 0, 0.3), 0px 30px 60px 0px rgba(0, 0, 0, 0.4), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)'
            }
          },
          colors: {
            background: '#e7eaf2',
            foreground: '#333333',

            divider: '#D9D9D9',
            overlay: 'rgba(0, 0, 0, 0.1)',
            focus: '#007AFF',

            content1: '#333333',
            content2: '#666666',
            content3: '#999999',
            content4: '#CCCCCC',
            default: '#ff0000'
          }
        },

        // Dark Mode
        dark: {
          layout: {
            boxShadow: {
              small: '0px 0px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 10px 0px rgba(0, 0, 0, 0.3), inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1)',
              medium: '0px 0px 15px 0px rgba(0, 0, 0, 0.3), 0px 2px 30px 0px rgba(0, 0, 0, 0.4), inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1)',
              large: '0px 0px 30px 0px rgba(0, 0, 0, 0.4), 0px 30px 60px 0px rgba(0, 0, 0, 0.5), inset 0px 0px 1px 0px rgba(255, 255, 255, 0.1)'
            }
          },

          colors: {
            background: '#101026',
            foreground: '#FFFFFF',

            divider: '#4C4C4C',
            overlay: 'rgba(255, 255, 255, 0.1)',
            focus: '#007AFF',

            content1: '#CCCCCC',
            content2: '#999999',
            content3: '#666666',
            content4: '#333333'
          }
        }
      }
    })
  ]
}
