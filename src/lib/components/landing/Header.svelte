<script lang="ts">
  export let isDarkMode: boolean;
  export let toggleTheme: () => void;

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<header class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 w-full">
  <nav class="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-transform hover:scale-105">
      <img src="/umbriel-dark.svg" alt="Umbriel CMS" class="h-6 dark:hidden">
      <img src="/umbriel-white.svg" alt="Umbriel CMS" class="h-6 hidden dark:block">
    </a>
    <div class="flex items-center space-x-2 sm:space-x-4">
      <div id="desktop-links" class="hidden md:flex items-center space-x-3 lg:space-x-6">
        <a href="#features" class="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
        <a href="#pricing" class="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Pricing</a>
        <a href="#docs" class="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Documentation</a>
        <a href="#blog" class="text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Blog</a>
      </div>
      <button 
        on:click={toggleTheme}
        class="outline-none focus:outline-none p-1 rounded-full focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      >
        <img 
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/sun.svg" 
          alt="Light mode" 
          class="w-5 h-5 text-yellow-500 dark:invert {isDarkMode ? 'block' : 'hidden'}"
        >
        <img 
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/moon.svg" 
          alt="Dark mode" 
          class="w-5 h-5 text-blue-400 dark:invert {!isDarkMode ? 'block' : 'hidden'}"
        >
      </button>
      <div class="md:hidden">
        <button 
          on:click={toggleMobileMenu}
          aria-label="Toggle mobile menu" 
          aria-expanded={isMobileMenuOpen}
          class="text-gray-800 dark:text-gray-100 focus:outline-none p-1 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        >
          <img 
            src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/menu.svg" 
            alt="Menu" 
            class="w-6 h-6 {!isMobileMenuOpen ? 'block' : 'hidden'} dark:invert"
          >
          <img 
            src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/x.svg" 
            alt="Close" 
            class="w-6 h-6 {isMobileMenuOpen ? 'block' : 'hidden'} dark:invert"
          >
        </button>
      </div>
    </div>
  </nav>
  {#if isMobileMenuOpen}
    <div class="md:hidden bg-white dark:bg-gray-900 shadow-lg md:shadow-none border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 sm:px-6 py-4 space-y-3">
        <a href="#features" class="mobile-nav-link block text-center py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Features</a>
        <a href="#pricing" class="mobile-nav-link block text-center py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Pricing</a>
        <a href="#docs" class="mobile-nav-link block text-center py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Documentation</a>
        <a href="#blog" class="mobile-nav-link block text-center py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Blog</a>
      </div>
    </div>
  {/if}
</header>

<style>
  header nav a:not(.text-2xl):not(.mobile-nav-link),
  #desktop-links a {
    position: relative;
    padding-bottom: 4px;
  }

  header nav a:not(.text-2xl):not(.mobile-nav-link)::after,
  #desktop-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  header nav a:not(.text-2xl):not(.mobile-nav-link):hover::after,
  header nav a:not(.text-2xl):not(.mobile-nav-link):focus::after,
  #desktop-links a:hover::after,
  #desktop-links a:focus::after {
    width: 100%;
  }
</style> 