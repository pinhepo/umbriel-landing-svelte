<script>
  import { onMount } from 'svelte';
  import { routes } from '../../../routes.js';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 100);
  });
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-24 md:py-28 lg:py-32">
  <!-- Decorative background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl transform rotate-12 opacity-70"></div>
    <div class="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl transform -rotate-12 opacity-70"></div>
  </div>

  <div class="container relative mx-auto px-4 sm:px-6 text-center">
    <div class="max-w-4xl mx-auto">
      <!-- Badge -->
      <div class="animate-on-load mb-8 {isLoaded ? 'loaded' : ''}">
        <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
          ✨ Welcome to the Future of Content Management
        </span>
      </div>

      <h1 class="animate-on-load hero-title text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 leading-tight tracking-tight {isLoaded ? 'loaded' : ''}">
        Unleash Your Content Potential
      </h1>
      
      <p class="animate-on-load hero-subtitle text-lg sm:text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed {isLoaded ? 'loaded' : ''}">
        Experience the next generation of content management. Powerful, flexible, and designed for the modern web.
      </p>

      <div class="animate-on-load hero-buttons flex flex-col sm:flex-row justify-center items-center gap-4 {isLoaded ? 'loaded' : ''}">
        <a href={routes.getStarted} class="group w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white font-semibold py-3 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out">
          Get Started Free
          <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <a href={routes.requestDemo} class="group w-full sm:w-auto inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 text-gray-800 dark:text-gray-100 font-semibold py-3 px-8 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
          Watch Demo
          <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>

      <!-- Trust badges -->
      <div class="animate-on-load mt-16 flex flex-col items-center space-y-4 {isLoaded ? 'loaded' : ''}">
        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Trusted by innovative teams worldwide</p>
        <div class="flex flex-wrap justify-center gap-8 opacity-70">
          <div class="h-8 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity">
            <!-- Add company logos here -->
            <div class="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <!-- Add more logo placeholders as needed -->
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-title.loaded {
    transition-delay: 0.1s;
  }

  .hero-subtitle.loaded {
    transition-delay: 0.3s;
  }

  .hero-buttons.loaded > * {
    transition-delay: 0.5s;
  }

  /* Enhance animations */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
</style> 