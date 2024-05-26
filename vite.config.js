import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/React-project/",
  build: {
    main: './src/main.jsx', // specify the exact path to main.jsx
  },
});
