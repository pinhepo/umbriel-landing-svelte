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

<!-- Apple-style minimal footer -->
<footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200/20 dark:border-gray-700/20 py-16 md:py-20">
  <div class="container mx-auto px-6 sm:px-8 lg:px-12">
    
    <!-- Main footer content -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      
      <!-- Brand section -->
      <div class="animate-on-scroll {isLoaded ? 'loaded' : ''}">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Umbriel</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          The most advanced content management platform designed for modern teams.
        </p>
      </div>

      <!-- Product links -->
      <div class="animate-on-scroll {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.1s;">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Product</h4>
        <ul class="space-y-3">
          <li><a href="#features" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Features</a></li>
          <li><a href="#pricing" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#updates" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Updates</a></li>
          <li><a href="#roadmap" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Roadmap</a></li>
        </ul>
      </div>

      <!-- Resources links -->
      <div class="animate-on-scroll {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.2s;">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Resources</h4>
        <ul class="space-y-3">
          <li><a href="#docs" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#guides" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Guides</a></li>
          <li><a href="#blog" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
          <li><a href="#support" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Support</a></li>
        </ul>
      </div>

      <!-- Company links -->
      <div class="animate-on-scroll {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.3s;">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Company</h4>
        <ul class="space-y-3">
          <li><a href="#about" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
          <li><a href={routes.contact} class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
          <li><a href="#careers" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Careers</a></li>
          <li><a href="#press" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Press</a></li>
        </ul>
      </div>

    </div>

    <!-- Bottom section -->
    <div class="pt-8 border-t border-gray-200 dark:border-gray-700">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <!-- Copyright -->
        <div class="animate-on-scroll {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.4s;">
          <p class="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Umbriel CMS. All rights reserved.
          </p>
        </div>

        <!-- Legal links -->
        <div class="animate-on-scroll flex space-x-6 {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.5s;">
          <a href={routes.privacyPolicy} class="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Privacy
          </a>
          <a href={routes.termsOfService} class="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Terms
          </a>
          <a href="#cookies" class="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Cookies
          </a>
        </div>

      </div>
    </div>

  </div>
</footer>

<style>
  /* Apple-style animations */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .animate-on-scroll.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  /* Clean link hover effects */
  footer a {
    position: relative;
  }

  footer a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  footer a:hover::after {
    width: 100%;
  }

  /* Typography refinements */
  footer h3, footer h4 {
    font-weight: 600;
  }

  footer ul li {
    line-height: 1.5;
  }
</style> 