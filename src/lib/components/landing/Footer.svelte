<script lang="ts">
  import { onMount } from 'svelte';
  import { routes } from '../../../routes.js';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 100);
  });
</script>

<footer class="bg-gray-800 dark:bg-gray-900 py-10 sm:py-12">
  <div class="container mx-auto px-4 sm:px-6 text-center md:flex md:justify-between md:items-center">
    <p class="text-gray-400 dark:text-gray-500 mb-4 md:mb-0 animate-on-scroll {isLoaded ? 'loaded' : ''}">&copy; {new Date().getFullYear()} Umbriel CMS. All rights reserved.</p>
    <div class="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6">
      <a href={routes.privacyPolicy} class="animate-on-scroll text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.1s;">Privacy Policy</a>
      <a href={routes.termsOfService} class="animate-on-scroll text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.2s;">Terms of Service</a>
      <a href={routes.contact} class="animate-on-scroll text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.3s;">Contact</a>
    </div>
  </div>
</footer> 