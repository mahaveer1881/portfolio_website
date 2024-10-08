import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-fontFamily)',
    },
    extend: {
      colors: {
        primary: '#10131a',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: '#E0E0E0',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: '#00FFD5',
          hover: '#01C3A4',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          // DEFAULT: '#fff',
          DEFAULT:
            'radial-gradient(farthest-corner at center, #10131a 30%, #0d2f3d 60%, #0d2f3d 100%)',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      textShadow: {
        custom: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
} satisfies Config;

export default config;

//dark theme color combination:
// Background Color: Charcoal (#1E1E1E)
// Primary Text Color: Light Gray (#E0E0E0)
// Accent Color: Cyan (#00BCD4) (same as light theme to maintain consistency)
// Hover Accent Color: Darker Cyan (#008C95) (same as light theme for consistency)

//light theme color combination:
// Background Color: Pale Gray (#F0F0F0)
// Primary Text Color: Dark Gray (#404040)
// Accent Color: Cyan (#00BCD4)
// Hover Accent Color: Dark Cyan (#008C95)

//new theme:
// for Highlight : // #C0C0C0;
