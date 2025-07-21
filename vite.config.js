import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/about-me-svelte/',    // right here! your repository name
  plugins: [svelte()],
})
