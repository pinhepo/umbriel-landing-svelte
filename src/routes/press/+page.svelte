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
</script>

<svelte:head>
  <title>Press - Umbriel CMS</title>
  <meta name="description" content="Press resources and media information for Umbriel CMS. Download assets, view company information, and get in touch with our press team." />
</svelte:head>

<div class="bg-white dark:bg-black min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-none">
          Press & Media
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12">
          Resources and information for journalists and media professionals.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="container mx-auto px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        
        <!-- Company Overview -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            About Umbriel CMS
          </h2>
          <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Umbriel CMS is a next-generation content management system designed for modern web development. 
              We empower creators, developers, and businesses to build and manage digital experiences with 
              intuitive tools and cutting-edge technology.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded with the mission to make content creation accessible and powerful, Umbriel combines 
              advanced features like AI-powered writing assistance, real-time collaboration, and flexible 
              theming systems in a platform that scales from individual blogs to enterprise websites.
            </p>
          </div>
        </div>

        <!-- Key Facts -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Key Facts
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-2xl p-8">
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technology</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Built with React, GraphQL, and Node.js</li>
                <li>• Real-time collaboration capabilities</li>
                <li>• AI-powered content assistance</li>
                <li>• Advanced analytics and insights</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Features</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Flex Block Builder for custom layouts</li>
                <li>• Multi-template publication system</li>
                <li>• Advanced theme customization</li>
                <li>• Comprehensive author management</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Press Contact -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Press Contact
          </h2>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-12 text-center">
            <div class="text-6xl mb-8">📰</div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Media Inquiries
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              For press inquiries, interviews, product information, or high-resolution assets, 
              please contact our press team. We respond to media requests within 24 hours.
            </p>
            <a 
              href="mailto:press@umbrielcms.com.br" 
              class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              press@umbrielcms.com.br
            </a>
          </div>
        </div>

        <!-- Media Resources -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Media Resources
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <div class="text-4xl mb-4">🖼️</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Brand Assets</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                High-resolution logos, brand guidelines, and visual assets for media use.
              </p>
              <a 
                href="mailto:press@umbrielcms.com.br?subject=Brand Assets Request"
                class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Request assets →
              </a>
            </div>

            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <div class="text-4xl mb-4">📊</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Product Screenshots</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Current product screenshots and interface examples for articles and reviews.
              </p>
              <a 
                href="mailto:press@umbrielcms.com.br?subject=Screenshots Request"
                class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Request screenshots →
              </a>
            </div>

            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <div class="text-4xl mb-4">👥</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Executive Bios</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Leadership team biographies and professional headshots for media coverage.
              </p>
              <a 
                href="mailto:press@umbrielcms.com.br?subject=Executive Bios Request"
                class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Request bios →
              </a>
            </div>

            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <div class="text-4xl mb-4">📝</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Press Releases</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Latest company news, product announcements, and milestone updates.
              </p>
              <a 
                href="mailto:press@umbrielcms.com.br?subject=Press Releases Request"
                class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Request releases →
              </a>
            </div>

          </div>
        </div>

        <!-- Guidelines -->
        <div class="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Usage Guidelines
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            When covering Umbriel CMS, please use "Umbriel CMS" or "Umbriel" in references. 
            Our brand assets are available for editorial use in articles, reviews, and news coverage. 
            Please contact our press team for approval of any other usage.
          </p>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div> 