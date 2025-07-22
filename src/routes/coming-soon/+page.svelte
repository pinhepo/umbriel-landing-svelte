<script lang="ts">
  import Header from '$lib/components/landing/Header.svelte';
  import Footer from '$lib/components/landing/Footer.svelte';
  import { onMount } from 'svelte';

  let isDarkMode = true;

  onMount(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('user-theme');
    if (savedTheme) {
      isDarkMode = savedTheme === 'dark';
      document.documentElement.classList.toggle('dark', isDarkMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  });

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('user-theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }

  // Resources being worked on
  const upcomingResources = [
    {
      icon: "📚",
      title: "Documentation",
      description: "Comprehensive guides, API references, and tutorials to help you get the most out of Umbriel CMS.",
      eta: "Coming Soon"
    },
    {
      icon: "🎯",
      title: "Getting Started Guides",
      description: "Step-by-step tutorials for beginners and advanced users to master content creation.",
      eta: "Coming Soon"
    },
    {
      icon: "✍️",
      title: "Blog & Insights",
      description: "Latest updates, best practices, case studies, and insights from the Umbriel team.",
      eta: "Coming Soon"
    },
    {
      icon: "🛠️",
      title: "Support Center",
      description: "Help articles, troubleshooting guides, and community forums for all your questions.",
      eta: "Coming Soon"
    }
  ];
</script>

<svelte:head>
  <title>Coming Soon - Umbriel CMS</title>
  <meta name="description" content="Exciting resources are on their way! We're working hard to bring you comprehensive documentation, guides, and support materials." />
</svelte:head>

<div class="bg-white dark:bg-black min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-4xl mx-auto text-center">
        
        <!-- Fun animated emoji -->
        <div class="text-8xl mb-8 animate-bounce">
          🚧
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-none">
          We're Building<br />
          <span class="text-blue-600 dark:text-blue-400">Something Amazing</span>
        </h1>
        
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12 max-w-3xl mx-auto">
          Our team is hard at work creating comprehensive resources to help you succeed with Umbriel CMS. 
          Great things take time, and we're making sure these will be worth the wait!
        </p>
        
      </div>
    </section>

    <!-- What's Coming Section -->
    <section class="container mx-auto px-6 lg:px-12">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            What's Coming
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Here's a sneak peek at the amazing resources we're preparing for you
          </p>
        </div>

        <!-- Resources Grid -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          {#each upcomingResources as resource}
            <div class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div class="flex items-start space-x-4">
                <div class="text-4xl">{resource.icon}</div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <span class="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    {resource.eta}
                  </span>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Progress Section -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-12 text-center mb-16">
          <div class="text-6xl mb-8">⚡</div>
          <h3 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            We're Moving Fast
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team is working around the clock to deliver these resources. 
            We believe in quality over speed, so we're taking the time to create 
            something truly exceptional for our community.
          </p>
          
          <!-- Fun progress bar -->
          <div class="max-w-md mx-auto mb-8">
            <div class="bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full animate-pulse" style="width: 75%"></div>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">75% Complete</p>
          </div>
        </div>

        <!-- Stay Updated Section -->
        <div class="text-center bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-lg border border-gray-200 dark:border-gray-700">
          <div class="text-5xl mb-6">📬</div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Want to Be the First to Know?
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We'll notify you as soon as these resources are ready. In the meantime, 
            feel free to reach out if you have any questions or need assistance.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Our Team
            </a>
            <a 
              href="#preview" 
              class="inline-flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium py-3 px-6 border border-blue-600 dark:border-blue-400 rounded-full transition-colors"
            >
              Try the Preview
            </a>
          </div>
        </div>

        <!-- Fun Timeline -->
        <div class="mt-16 text-center">
          <h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Development Timeline
          </h3>
          <div class="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ✓
              </div>
              <h4 class="font-bold text-gray-900 dark:text-white mb-2">Platform Ready</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 text-center">CMS is live and working</p>
            </div>
            
            <div class="hidden md:block w-12 h-1 bg-gray-300 dark:bg-gray-600"></div>
            
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 animate-pulse">
                🔨
              </div>
              <h4 class="font-bold text-gray-900 dark:text-white mb-2">Resources Building</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 text-center">Currently in development</p>
            </div>
            
            <div class="hidden md:block w-12 h-1 bg-gray-300 dark:bg-gray-600"></div>
            
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🚀
              </div>
              <h4 class="font-bold text-gray-900 dark:text-white mb-2">Launch Ready</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 text-center">Coming very soon</p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div>

<style>
  /* Custom animation for the progress bar */
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  .animate-shimmer {
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }
</style> 