<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let isDarkMode = true; // Start with dark mode by default

	onMount(() => {
		// Check for saved theme preference
		const savedTheme = localStorage.getItem('user-theme');
		if (savedTheme) {
			isDarkMode = savedTheme === 'dark';
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			isDarkMode = true;
		}
		
		// Apply theme
		document.documentElement.classList.toggle('dark', isDarkMode);
	});

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark', isDarkMode);
		localStorage.setItem('user-theme', isDarkMode ? 'dark' : 'light');
	}
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
	<slot />
</div>
