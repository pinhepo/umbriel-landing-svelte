<script>
  import { onMount } from 'svelte';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 300);
  });

  const enterpriseFeatures = [
    "Custom multi-tenant architecture",
    "Advanced GraphQL APIs with MCP integration", 
    "Automated documentation system with Docusaurus",
    "Full control over infrastructure and scaling",
    "Custom domain management and SSL",
    "Advanced analytics and monitoring",
    "White-label solutions",
    "Dedicated support and SLA"
  ];

  const plugPlayFeatures = [
    "Instant site deployment in seconds",
    "Pay-as-you-go pricing model",
    "Pre-configured themes and templates",
    "Automated subdomain setup",
    "Built-in CDN and performance optimization",
    "Mobile-responsive out of the box",
    "One-click publishing workflow",
    "No technical expertise required"
  ];

  const architectureHighlights = [
    {
      title: "Multi-tenant Detection",
      description: "Automatic tenant detection via subdomain with dynamic configuration loading"
    },
    {
      title: "Edge Caching",
      description: "Smart caching strategy with CDN integration for lightning-fast performance"
    },
    {
      title: "Dynamic Theming",
      description: "Real-time theme switching with CSS variables and Tailwind integration"
    },
    {
      title: "MCP Server Integration", 
      description: "Advanced AI-powered documentation and code analysis with automated updates"
    }
  ];
</script>

<!-- Deployment Options Section -->
<section class="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black py-24 md:py-32">
  <div class="container mx-auto px-6 lg:px-12">
    
    <!-- Section Header -->
    <div class="text-center mb-20">
      <div class="animate-on-scroll mb-8 {isLoaded ? 'loaded' : ''}">
        <span class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase">
          Deployment Options
        </span>
      </div>
      
      <h2 class="animate-on-scroll text-5xl lg:text-7xl xl:text-8xl font-black mb-8 text-gray-900 dark:text-white leading-none tracking-tight {isLoaded ? 'loaded' : ''}">
        Enterprise or<br />
        <span class="text-blue-600 dark:text-blue-400">Plug & Play</span>
      </h2>
      
      <p class="animate-on-scroll text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-4xl mx-auto {isLoaded ? 'loaded' : ''}">
        Choose your deployment strategy. From instant sites ready in seconds 
        to enterprise-grade multi-tenant architectures.
      </p>
    </div>

    <!-- Main Comparison -->
    <div class="animate-on-scroll grid lg:grid-cols-2 gap-12 mb-24 {isLoaded ? 'loaded' : ''}">
      
      <!-- Enterprise Option -->
      <div class="group relative">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
        <div class="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
          
          <div class="mb-8">
            <div class="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
              🏢 Enterprise
            </div>
            <h3 class="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Multi-tenant Architecture
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Full-scale enterprise solution with advanced multi-tenancy, 
              custom integrations, and complete infrastructure control.
            </p>
          </div>

          <div class="space-y-4 mb-8">
            {#each enterpriseFeatures as feature}
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            {/each}
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">Starting at</div>
            <div class="text-3xl font-black text-gray-900 dark:text-white">Custom Pricing</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Based on requirements</div>
          </div>

        </div>
      </div>

      <!-- Plug & Play Option -->
      <div class="group relative">
        <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-500/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
        <div class="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
          
          <div class="mb-8">
            <div class="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4">
              ⚡ Plug & Play
            </div>
            <h3 class="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Instant Deployment
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Get your professional website live in seconds. 
              Pay-as-you-go with zero setup complexity.
            </p>
          </div>

          <div class="space-y-4 mb-8">
            {#each plugPlayFeatures as feature}
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            {/each}
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">Starting at</div>
            <div class="text-3xl font-black text-gray-900 dark:text-white">$122<span class="text-lg font-normal">/month</span></div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Pay as you grow</div>
          </div>

        </div>
      </div>

    </div>

    <!-- Architecture Highlights -->
    <div class="animate-on-scroll mb-20 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Multi-tenant Architecture Highlights
      </h3>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each architectureHighlights as highlight}
          <div class="text-center group">
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
              <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {highlight.title}
              </h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Instant Deployment Demo -->
    <div class="animate-on-scroll bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center text-white {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold mb-6">
        From Payment to Live Site
      </h3>
      <p class="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
        Configure basic settings → Choose your theme → Site goes live automatically. 
        Your customers can start building immediately.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-center">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
          <span>Payment</span>
        </div>
        <svg class="w-6 h-6 text-white/70 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <span>Basic Config</span>
        </div>
        <svg class="w-6 h-6 text-white/70 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <span>Live in Seconds</span>
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
</style> 