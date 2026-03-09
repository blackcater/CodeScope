import path from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'electron-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	main: {
		plugins: [tsconfigPaths({ root: path.resolve(__dirname) })],
	},
	preload: {
		plugins: [tsconfigPaths({ root: path.resolve(__dirname) })],
	},
	renderer: {
		plugins: [
			tsconfigPaths({ root: path.resolve(__dirname) }),
			react(),
			tailwindcss(),
		],
	},
})
