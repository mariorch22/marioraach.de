/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        backgroundGray: 'rgb(17, 17, 17)',
        customGreenButton: '#134611',
        pageAnimationGray: 'rgb(13, 13, 13)',
        c_orange: "rgb(252, 163, 17)",
        c_lightgray: "rgb(229, 229, 229)",
        c_darkblue: "rgb(20, 33, 61)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        'xl': '0 3px 3px -2px rgba(0, 0, 0, 0.3)',
        '3xl': '4px 8px 12px -4px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontFamily: {
        glitch : ['"Rubik Glitch Pop"', ...defaultTheme.fontFamily.sans],
        kalam : ['"Kalam"', ...defaultTheme.fontFamily.sans],
        roboto : ['"Roboto"', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      dropShadow: {
        'customDropShadow': '0 35px 35px rgba(255, 255, 255, 0.3)',
        'customDropShadow2': '0 3px 3px rgba(255, 255, 255, 0.1)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      backgroundImage: {
        'hemd_small': "url('/images/hemd/hemd_small.webp')",
        'hoddie_small': "url('/images/hoddie/hoddie_small_very.png')",
        'blog_ai': "url('/images/blog/ai_gray.jpg')",
      },
      transitionDelay: {
        '500': '500ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.delay-2000': {
          transitionDelay: theme('transitionDelay.2000'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}