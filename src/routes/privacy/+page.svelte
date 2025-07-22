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
  <title>Privacy Policy - Umbriel CMS</title>
  <meta name="description" content="Learn how Umbriel CMS protects your privacy and handles your personal information. Our commitment to data security and transparency." />
</svelte:head>

<div class="bg-white dark:bg-black min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-none">
          Privacy Policy
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12">
          Your privacy matters. Learn how we protect and handle your data.
        </p>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="container mx-auto px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        
        <!-- Last Updated -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-8 mb-16 text-center">
          <div class="text-4xl mb-4">🔒</div>
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Last Updated: January 15, 2024
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            This Privacy Policy describes how Umbriel CMS collects, uses, and protects your information.
          </p>
        </div>

        <!-- Privacy Sections -->
        <div class="space-y-12">
          
          <!-- Information We Collect -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Information We Collect
            </h3>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Personal Information</h4>
                <p>When you create an account or contact us, we may collect your name, email address, company name, and other contact details you provide.</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Usage Data</h4>
                <p>We collect information about how you use our platform, including pages visited, features used, and time spent on the platform.</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Technical Information</h4>
                <p>We automatically collect device information, IP addresses, browser type, and operating system for security and optimization purposes.</p>
              </div>
            </div>
          </div>

          <!-- How We Use Your Information -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              How We Use Your Information
            </h3>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Provide, maintain, and improve our services</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Send you technical updates, security alerts, and support messages</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Respond to your comments, questions, and customer service requests</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Monitor and analyze trends, usage, and activities in connection with our services</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Detect, investigate, and prevent fraudulent transactions and other illegal activities</span>
              </li>
            </ul>
          </div>

          <!-- Data Sharing and Disclosure -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Data Sharing and Disclosure
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>With your explicit consent</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>To comply with legal obligations or protect our rights</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>With trusted service providers who assist in operating our platform</span>
              </li>
            </ul>
          </div>

          <!-- Data Security -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Data Security
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
            </p>
          </div>

          <!-- Your Rights -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Your Rights
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Access and update your personal information</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Request deletion of your personal data</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Object to or restrict processing of your data</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Data portability and withdraw consent</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Contact Information -->
        <div class="mt-16 text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Questions About Privacy?
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us.
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