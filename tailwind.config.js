// tailwind.config.js

module.exports = {
  content: [
    "./index.html",      // Adjust these to include the paths where your HTML, JS, and other files are located.
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom theme settings can go here.
      colors: {
        customColor: '#3490dc',
      },
    },
  },
  plugins: [],
}
