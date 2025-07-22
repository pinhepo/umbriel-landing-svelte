<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  export let isDarkMode: boolean;
  export let toggleTheme: () => void;

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  // Check if we're on the home page
  $: isHomePage = $page.url.pathname === '/';

  // Navigation handler for anchor links
  function handleNavClick(event: Event, anchor: string) {
    event.preventDefault();
    
    if (isHomePage) {
      // If on home page, scroll to the section
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home with anchor
      goto(`/#${anchor}`);
    }
    
    // Close mobile menu if open
    isMobileMenuOpen = false;
  }
</script>

<!-- Apple-style minimal header -->
<header class="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20 sticky top-0 z-50 w-full">
  <nav class="container mx-auto px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
    
    <!-- Logo -->
    <a href="/" class="text-xl font-medium text-gray-900 dark:text-white transition-transform hover:scale-105">
      Umbriel
    </a>
    
    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center space-x-8 lg:space-x-12">
      <a href="#features" on:click={(e) => handleNavClick(e, 'features')} class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Features
      </a>
      <a href="#technical" on:click={(e) => handleNavClick(e, 'technical')} class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Tech Stack
      </a>
      <a href="#deployment" on:click={(e) => handleNavClick(e, 'deployment')} class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Solutions
      </a>
      <a href="#developers" on:click={(e) => handleNavClick(e, 'developers')} class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Developers
      </a>
      <a href="#preview" on:click={(e) => handleNavClick(e, 'preview')} class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-semibold">
        Try Preview
      </a>
    </div>

    <!-- Actions -->
    <div class="flex items-center space-x-4">
      <!-- Theme toggle -->
      <button 
        on:click={toggleTheme}
        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle theme"
      >
        {#if isDarkMode}
          <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        {:else}
          <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        {/if}
      </button>

      <!-- Get Started button -->
      <a 
        href="/get-started" 
        class="hidden sm:inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-105"
      >
        Get Started
      </a>

      <!-- Mobile menu button -->
      <button 
        on:click={toggleMobileMenu}
        class="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle menu"
      >
        {#if isMobileMenuOpen}
          <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        {:else}
          <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        {/if}
      </button>
    </div>
  </nav>

  <!-- Mobile Navigation -->
  {#if isMobileMenuOpen}
    <div class="md:hidden border-t border-gray-200/20 dark:border-gray-700/20 bg-white/95 dark:bg-black/95 backdrop-blur-xl">
      <div class="container mx-auto px-6 py-6 space-y-4">
        <a 
          href="#features" 
          class="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          on:click={(e) => handleNavClick(e, 'features')}
        >
          Features
        </a>
        <a 
          href="#technical" 
          class="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          on:click={(e) => handleNavClick(e, 'technical')}
        >
          Tech Stack
        </a>
        <a 
          href="#deployment" 
          class="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          on:click={(e) => handleNavClick(e, 'deployment')}
        >
          Solutions
        </a>
        <a 
          href="#developers" 
          class="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          on:click={(e) => handleNavClick(e, 'developers')}
        >
          Developers
        </a>
        <a 
          href="#preview" 
          class="block text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-semibold"
          on:click={(e) => handleNavClick(e, 'preview')}
        >
          Try Preview
        </a>
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <a 
            href="/get-started" 
            class="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-full transition-colors"
            on:click={toggleMobileMenu}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  {/if}
</header>

<style>
  /* Apple-style glass morphism effect */
  header {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* Smooth nav link hover effects */
  nav a:not(:last-child) {
    position: relative;
  }

  nav a:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -4px;
    left: 50%;
    background-color: currentColor;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  nav a:not(:last-child):hover::after {
    width: 100%;
  }

  /* Button hover effects */
  button, a[href="/get-started"] {
    transform: scale(1);
    transition: all 0.2s ease;
  }

  button:hover, a[href="/get-started"]:hover {
    transform: scale(1.05);
  }

  /* Mobile menu animation */
  .md\:hidden {
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style> 