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
  <title>Contact - Umbriel CMS</title>
  <meta name="description" content="Get in touch with the Umbriel CMS team. We'd love to hear from you and answer any questions about our content management platform." />
</svelte:head>

<div class="bg-white dark:bg-black min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-none">
          Contact Us
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12">
          We'd love to hear from you. Get in touch with our team.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="container mx-auto px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        
        <!-- Main Contact Card -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-12 mb-16 text-center">
          <div class="text-6xl mb-8">✉️</div>
          <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Send us an email
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Whether you have questions about our platform, need technical support, 
            or want to discuss a partnership opportunity, we're here to help.
          </p>
          <a 
            href="mailto:hello@umbrielcms.com.br" 
            class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            hello@umbrielcms.com.br
          </a>
        </div>

        <!-- Contact Options Grid -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          
          <!-- General Inquiries -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <div class="text-4xl mb-4">💬</div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              General Inquiries
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Have questions about Umbriel CMS? Want to learn more about our features and pricing?
            </p>
            <a 
              href="mailto:hello@umbrielcms.com.br?subject=General Inquiry"
              class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Send inquiry →
            </a>
          </div>

          <!-- Technical Support -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <div class="text-4xl mb-4">🛠️</div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Support
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Need help with implementation, integration, or troubleshooting? Our team is ready to assist.
            </p>
            <a 
              href="mailto:hello@umbrielcms.com.br?subject=Technical Support"
              class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Get support →
            </a>
          </div>

          <!-- Business & Partnerships -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800">
            <div class="text-4xl mb-4">🤝</div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Business & Partnerships
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Interested in partnerships, enterprise solutions, or custom implementations?
            </p>
            <a 
              href="mailto:hello@umbrielcms.com.br?subject=Business Partnership"
              class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Let's talk →
            </a>
          </div>

        </div>

        <!-- Response Time -->
        <div class="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Quick Response Time
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We typically respond to all emails within 24 hours during business days. 
            For urgent technical issues, please include "URGENT" in your subject line.
          </p>
        </div>

        <!-- Other Links -->
        <div class="mt-16 text-center">
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Looking for something else?
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <a href="/careers" class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              Join our team
            </a>
            <a href="/press" class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              Press inquiries
            </a>
            <a href="/about" class="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              Learn about us
            </a>
          </div>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div> 