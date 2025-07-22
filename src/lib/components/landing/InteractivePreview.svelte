<script>
  import { onMount } from 'svelte';
  import { routes, openInNewTab } from '../../../routes.js';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 300);
  });

  const handleTryPreview = () => {
    openInNewTab(routes.interactivePreview);
  };

  // Updated features based on actual CMS capabilities and screenshots
  const previewFeatures = [
    {
      icon: "📝",
      title: "Create Publications",
      description: "Video templates, image templates, default and AI article templates. Write, edit and preview content in real-time"
    },
    {
      icon: "📊",
      title: "Detailed Analytics", 
      description: "Complete dashboard with active users metrics, page views, comments and content distribution insights"
    },
    {
      icon: "🎨",
      title: "Complete Customization",
      description: "Configure colors, fonts and visual identity of your site with live preview"
    },
    {
      icon: "🔧",
      title: "Flex Block Builder",
      description: "Advanced block builder to create unique and responsive layouts for your content"
    },
    {
      icon: "👥",
      title: "Author Management",
      description: "Manage your writing team, set permissions and track productivity in real-time"
    },
    {
      icon: "🚀",
      title: "Live Site Preview",
      description: "See your final website working with all created content and applied customizations"
    }
  ];
</script>

<!-- Interactive Preview Section -->
<section class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-24 md:py-32 overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-black/20"></div>
  <div class="absolute inset-0">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
  </div>

  <div class="container relative mx-auto px-6 lg:px-12 text-center">
    
    <!-- Section Header -->
    <div class="mb-16">
      <div class="animate-on-scroll mb-8 {isLoaded ? 'loaded' : ''}">
        <span class="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
          🔥 Try It Free - No Signup Required
        </span>
      </div>
      
      <h2 class="animate-on-scroll text-5xl lg:text-7xl xl:text-8xl font-black mb-8 text-white leading-none tracking-tight {isLoaded ? 'loaded' : ''}">
        Experience Umbriel<br />
        <span class="text-blue-200">For 30 Minutes</span>
      </h2>
      
      <p class="animate-on-scroll text-xl lg:text-2xl text-blue-100 font-light max-w-4xl mx-auto mb-12 {isLoaded ? 'loaded' : ''}">
        Access the complete CMS for 30 minutes. Create articles, select images and videos, 
        customize themes and see your website working - all in a real trial environment.
      </p>
    </div>

    <!-- Feature Grid - Now with 6 features in 2 rows -->
    <div class="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 {isLoaded ? 'loaded' : ''}">
      {#each previewFeatures as feature}
        <div class="text-center group">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
            <div class="text-4xl mb-4">{feature.icon}</div>
            <h3 class="text-lg font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p class="text-blue-100 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <!-- What you can do section -->
    <div class="animate-on-scroll mb-16 {isLoaded ? 'loaded' : ''}">
      <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <h3 class="text-2xl font-bold text-white mb-6">✨ What you can do in 30 minutes:</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-100">
          <div class="text-center">
            <div class="text-3xl mb-2">✍️</div>
            <p class="text-sm font-medium">Write complete articles</p>
          </div>
          <div class="text-center">
            <div class="text-3xl mb-2">🖼️</div>
            <p class="text-sm font-medium">Select images and videos</p>
          </div>
          <div class="text-center">
            <div class="text-3xl mb-2">🎨</div>
            <p class="text-sm font-medium">Customize visual themes</p>
          </div>
          <div class="text-center">
            <div class="text-3xl mb-2">👀</div>
            <p class="text-sm font-medium">See live site preview</p>
          </div>
        </div>
        <div class="mt-6 text-center">
          <p class="text-blue-200 text-sm">
            <strong>Important:</strong> You can create content and preview everything, but not publish. 
            To publish, you need a full account.
          </p>
        </div>
      </div>
    </div>

    <!-- Main CTA -->
    <div class="animate-on-scroll {isLoaded ? 'loaded' : ''}">
      <button 
        on:click={handleTryPreview}
        class="group relative inline-flex items-center justify-center bg-white text-blue-600 font-bold py-6 px-12 text-xl rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25"
      >
        <span class="relative z-10">
          🚀 Start 30-Minute Trial
        </span>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </button>
      
      <p class="text-blue-200 text-sm mt-4 font-medium">
        ⏱️ Full 30 minutes • 🔓 No login required • ✨ All features unlocked
      </p>
    </div>

    <!-- Trust Indicators -->
    <div class="animate-on-scroll mt-16 {isLoaded ? 'loaded' : ''}">
      <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-blue-200">
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm font-medium">Complete Real CMS</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm font-medium">Live Website Generation</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm font-medium">30-Minute Session</span>
        </div>
      </div>
    </div>

  </div>
</section>

<style>
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .animate-on-scroll.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  .animate-on-scroll:nth-child(2).loaded {
    transition-delay: 0.2s;
  }

  .animate-on-scroll:nth-child(3).loaded {
    transition-delay: 0.4s;
  }

  .animate-on-scroll:nth-child(4).loaded {
    transition-delay: 0.6s;
  }

  .animate-on-scroll:nth-child(5).loaded {
    transition-delay: 0.8s;
  }
</style> 