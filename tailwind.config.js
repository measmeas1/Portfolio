module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-green': '#3C8D99',   // Primary button/hover color
        'dark-teal': '#006F8E',     // Accent color for hover/focus
        'charcoal-gray': '#2C2C2C', // Dark background color
        'light-gray': '#EAEAEA',    // Light gray for sections
        'muted-teal': '#1A5F6D',    // Hover and active effects
        'light-green': '#A8F11D',
        'back-ground': '#1c1c22'  // Hover and active effects
      },
      backdropBlur: {
        sm: '4px', // Blur effect for mobile menu backdrop
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Arial', 'sans-serif'],  
        mono: ['JetBrains Mono', 'monospace'], 
        sigmar: ["Sigmar", "sans-serif"],
      
      },
      screens: {
        sm: '640px', // Mobile screen size breakpoint
        md: '768px', // Tablet screen size breakpoint
        lg: '1024px', // Large screen size breakpoint
        xl: '1280px', // Extra large screen size breakpoint
      }
    },
  },
  plugins: [],
}
