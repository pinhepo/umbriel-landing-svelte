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
  <title>Cookies Policy - Umbriel CMS</title>
  <meta name="description" content="Learn about how Umbriel CMS uses cookies to improve your experience and provide better services. Understand our cookie practices." />
</svelte:head>

<div class="bg-white dark:bg-black min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-none">
          Cookies Policy
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12">
          How we use cookies to enhance your experience on Umbriel CMS.
        </p>
      </div>
    </section>

    <!-- Cookies Policy Content -->
    <section class="container mx-auto px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        
        <!-- Last Updated -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-8 mb-16 text-center">
          <div class="text-4xl mb-4">🍪</div>
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Last Updated: January 15, 2024
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            This Cookie Policy explains how Umbriel CMS uses cookies and similar technologies.
          </p>
        </div>

        <!-- Cookie Sections -->
        <div class="space-y-12">
          
          <!-- What Are Cookies -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              What Are Cookies?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </div>

          <!-- How We Use Cookies -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              How We Use Cookies
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We use cookies for several reasons:
            </p>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>To ensure our platform functions properly and securely</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>To remember your preferences and settings</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>To analyze how our website is used and improve our services</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>To provide personalized content and features</span>
              </li>
            </ul>
          </div>

          <!-- Types of Cookies -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Types of Cookies We Use
            </h3>
            <div class="space-y-6">
              
              <!-- Essential Cookies -->
              <div class="border-l-4 border-blue-500 pl-6">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Essential Cookies</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as logging in or filling in forms.
                </p>
              </div>

              <!-- Performance Cookies -->
              <div class="border-l-4 border-green-500 pl-6">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Performance Cookies</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most popular and see how visitors move around the site.
                </p>
              </div>

              <!-- Functional Cookies -->
              <div class="border-l-4 border-yellow-500 pl-6">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Functional Cookies</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
              </div>

              <!-- Analytics Cookies -->
              <div class="border-l-4 border-purple-500 pl-6">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Analytics Cookies</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our site and services.
                </p>
              </div>

            </div>
          </div>

          <!-- Third-Party Cookies -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Third-Party Cookies
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We may also use third-party services that set their own cookies. These include:
            </p>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span><strong>Google Analytics:</strong> To analyze website traffic and usage patterns</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span><strong>Content Delivery Networks:</strong> To ensure fast and reliable content delivery</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span><strong>Authentication Services:</strong> To provide secure login functionality</span>
              </li>
            </ul>
          </div>

          <!-- Managing Cookies -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Managing Your Cookie Preferences
            </h3>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <p>You have several options for managing cookies:</p>
              
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Browser Settings</h4>
                <p class="text-sm">Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent.</p>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Cookie Consent</h4>
                <p class="text-sm">When you first visit our site, you can choose which types of cookies to accept through our cookie consent banner.</p>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Opt-Out Links</h4>
                <p class="text-sm">For third-party analytics services, you can opt out using their specific opt-out mechanisms.</p>
              </div>
            </div>
          </div>

          <!-- Cookie Duration -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Cookie Duration
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Session Cookies</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">These are temporary cookies that expire when you close your browser session.</p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Persistent Cookies</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">These cookies remain on your device for a set period or until you delete them manually.</p>
              </div>
            </div>
          </div>

          <!-- Updates to Policy -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Updates to This Policy
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page with an updated "Last Updated" date.
            </p>
          </div>

        </div>

        <!-- Contact Information -->
        <div class="mt-16 text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Questions About Cookies?
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us.
          </p>
          <a 
            href="mailto:privacy@umbrielcms.com.br" 
            class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            privacy@umbrielcms.com.br
          </a>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div> 