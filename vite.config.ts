import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		// Make environment variables available in SSR
		'process.env.ADMIN_UMBRIEL_API_URL': JSON.stringify(process.env.ADMIN_UMBRIEL_API_URL)
	}
});
