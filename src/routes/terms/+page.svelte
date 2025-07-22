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
  <title>Terms of Service - Umbriel CMS</title>
  <meta name="description" content="Read the Terms of Service for Umbriel CMS. Understand your rights and responsibilities when using our content management platform." />
</svelte:head>

<div class="bg-white dark:bg-black min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-none">
          Terms of Service
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12">
          The terms and conditions for using Umbriel CMS platform.
        </p>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="container mx-auto px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        
        <!-- Last Updated -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-8 mb-16 text-center">
          <div class="text-4xl mb-4">📜</div>
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Last Updated: January 15, 2024
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Please read these Terms of Service carefully before using Umbriel CMS.
          </p>
        </div>

        <!-- Terms Sections -->
        <div class="space-y-12">
          
          <!-- Acceptance of Terms -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              1. Acceptance of Terms
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              By accessing and using Umbriel CMS ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <!-- Description of Service -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              2. Description of Service
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Umbriel CMS provides a content management platform that allows users to create, manage, and publish digital content. The service includes:
            </p>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Content creation and editing tools</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Content management and organization features</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Publishing and distribution capabilities</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Analytics and reporting tools</span>
              </li>
            </ul>
          </div>

          <!-- User Accounts -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              3. User Accounts
            </h3>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <p>To access certain features of the Service, you must register for an account. When you register for an account, you must provide information that is accurate, complete, and current at all times.</p>
              <p>You are responsible for safeguarding the password and for maintaining the confidentiality of your account. You agree not to disclose your password to any third party.</p>
              <p>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
            </div>
          </div>

          <!-- Acceptable Use -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              4. Acceptable Use
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              You agree not to use the Service:
            </p>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-red-500 mr-3 mt-1">•</span>
                <span>For any unlawful purpose or to solicit others to perform unlawful acts</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-3 mt-1">•</span>
                <span>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-3 mt-1">•</span>
                <span>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-3 mt-1">•</span>
                <span>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-3 mt-1">•</span>
                <span>To submit false or misleading information</span>
              </li>
            </ul>
          </div>

          <!-- Content and Intellectual Property -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              5. Content and Intellectual Property
            </h3>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <p>You retain ownership of any intellectual property rights that you hold in content you create using our Service.</p>
              <p>By using our Service, you grant us a worldwide, royalty-free license to use, display, and distribute your content solely for the purpose of providing the Service.</p>
              <p>The Service and its original content, features, and functionality remain the exclusive property of Umbriel CMS and its licensors.</p>
            </div>
          </div>

          <!-- Limitation of Liability -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              6. Limitation of Liability
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              In no event shall Umbriel CMS, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </div>

          <!-- Termination -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              7. Termination
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </div>

          <!-- Changes to Terms -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              8. Changes to Terms
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </div>

        </div>

        <!-- Contact Information -->
        <div class="mt-16 text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Questions About These Terms?
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <a 
            href="mailto:legal@umbrielcms.com.br" 
            class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            legal@umbrielcms.com.br
          </a>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div> 