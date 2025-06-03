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

<section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 dark:from-blue-700 dark:via-blue-800 dark:to-purple-900 py-24 sm:py-32">
  <!-- Decorative elements -->
  <div class="absolute inset-0">
    <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/5 to-transparent"></div>
    <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/30 dark:bg-blue-400/10 blur-3xl"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-500/30 dark:bg-purple-400/10 blur-3xl"></div>
  </div>

  <div class="container relative mx-auto px-4 sm:px-6">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Small badge -->
      <div class="animate-on-scroll mb-8 {isLoaded ? 'loaded' : ''}">
        <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm">
          ✨ Limited Time Offer
        </span>
      </div>

      <h2 class="animate-on-scroll text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white {isLoaded ? 'loaded' : ''}">
        Ready to Transform Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Content Management</span>?
      </h2>

      <p class="animate-on-scroll text-lg sm:text-xl mb-12 text-blue-100 dark:text-blue-200 max-w-2xl mx-auto {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.2s;">
        Join thousands of businesses using Umbriel CMS to manage their content effectively. Start your journey today with our 14-day free trial.
      </p>

      <div class="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.4s;">
        <!-- Primary CTA -->
        <a 
          href={routes.getStarted}
          class="group w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-out"
        >
          Get Started Free
          <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <!-- Secondary CTA -->
        <a 
          href={routes.requestDemo}
          class="group w-full sm:w-auto inline-flex items-center justify-center bg-blue-500/20 hover:bg-blue-500/30 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl text-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 ease-out"
        >
          Schedule Demo
          <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>

      <!-- Trust indicators -->
      <div class="animate-on-scroll mt-12 pt-12 border-t border-white/10 {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.6s;">
        <p class="text-sm text-blue-100 dark:text-blue-200 mb-4">Trusted by innovative teams worldwide</p>
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div class="flex items-center space-x-2 text-white/90">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="font-medium">4.9/5 rating</span>
          </div>
          <div class="flex items-center space-x-2 text-white/90">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span class="font-medium">10k+ users</span>
          </div>
          <div class="flex items-center space-x-2 text-white/90">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span class="font-medium">Enterprise ready</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Base animations */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-on-scroll.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  /* Staggered delays handled by inline styles */
</style> 