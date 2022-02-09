const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: [
    "./src/**/*.{svelte,js}"
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}
