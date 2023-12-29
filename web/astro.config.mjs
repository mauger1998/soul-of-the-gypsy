import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { sanityIntegration } from '@sanity/astro'
import react from '@astrojs/react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config

export default defineConfig({
	vite: {
		resolve: {
			alias: {
				'@/': `${path.resolve(__dirname, 'src')}/`
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					// path to your scss variables
					additionalData: `@import "@/styles/variables.scss";`
				}
			}
		}
	},
	image: {
		remotePatterns: [
			{
				protocol: 'https'
			}
		]
	},
	integrations: [
		react(),
		sanityIntegration({
			projectId: '5iens2lz',
			dataset: 'production',
			apiVersion: '2023-02-08',
			useCdn: false
		})
	]
})
