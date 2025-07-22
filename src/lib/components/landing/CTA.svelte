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

<!-- Apple-style CTA Section -->
<section class="relative overflow-hidden bg-gray-100 dark:bg-gray-900 py-32 md:py-40 lg:py-48">
  <!-- Minimal background -->
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"></div>
  
  <div class="container relative mx-auto px-6 sm:px-8 lg:px-12">
    <div class="max-w-4xl mx-auto text-center">
      
      <!-- Apple-style headline -->
      <h2 class="animate-on-scroll text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-gray-900 dark:text-white leading-none tracking-tight {isLoaded ? 'loaded' : ''}">
        Get started.
      </h2>

      <!-- Subtitle -->
      <h3 class="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-light mb-12 text-gray-900 dark:text-white leading-tight {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.2s;">
        Experience the future of content management.
      </h3>

      <!-- Clean description -->
      <p class="animate-on-scroll text-lg sm:text-xl md:text-2xl mb-16 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.4s;">
        Join thousands of creators and businesses using Umbriel CMS to build amazing digital experiences.
      </p>

      <!-- Apple-style action button -->
      <div class="animate-on-scroll {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.6s;">
        <a 
          href={routes.getStarted}
          class="apple-cta-button inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-12 text-lg rounded-full transition-all duration-300 ease-out"
        >
          Start free trial
        </a>
      </div>

      <!-- Simple feature highlights -->
      <div class="animate-on-scroll flex flex-wrap justify-center items-center gap-8 mt-16 text-sm text-gray-500 dark:text-gray-500 {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.8s;">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span>14-day free trial</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span>No credit card required</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span>Cancel anytime</span>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  /* Apple-style button */
  .apple-cta-button {
    transform: scale(1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  .apple-cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  /* Feature highlights animation */
  .animate-on-scroll div {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .animate-on-scroll.loaded div {
    opacity: 1;
    transform: translateY(0);
  }

  .animate-on-scroll.loaded div:nth-child(1) { transition-delay: 0.1s; }
  .animate-on-scroll.loaded div:nth-child(2) { transition-delay: 0.2s; }
  .animate-on-scroll.loaded div:nth-child(3) { transition-delay: 0.3s; }
</style> 