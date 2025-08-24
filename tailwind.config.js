/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'custom-slate-950': '#020617',
            'custom-slate-900': '#0f172a',
            'custom-slate-800': '#1e293b',
        }
    },
  },
  plugins: [],
}