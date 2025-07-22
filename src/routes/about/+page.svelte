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
  <title>About - Umbriel CMS</title>
  <meta name="description" content="Learn about Umbriel CMS - the next-generation content management system built for modern web development and seamless content creation." />
</svelte:head>

<div class="bg-white dark:bg-black min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-none">
          About Umbriel
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12">
          Building the future of content management, one innovation at a time.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="container mx-auto px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        
        <!-- Mission Section -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              At Umbriel, we believe content creation should be intuitive, powerful, and enjoyable. 
              We're building a next-generation content management system that empowers creators, 
              developers, and businesses to bring their ideas to life without technical barriers.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our platform combines cutting-edge technology with user-centered design to deliver 
              an experience that feels natural and inspires creativity. From individual bloggers 
              to enterprise teams, Umbriel adapts to your workflow and grows with your ambitions.
            </p>
          </div>
        </div>

        <!-- Values Section -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Innovation First</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We push the boundaries of what's possible in content management, 
                always looking for better ways to solve real problems.
              </p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <div class="text-4xl mb-4">🎨</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Design Excellence</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Beautiful, intuitive interfaces that make complex tasks feel simple 
                and enjoyable to perform.
              </p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <div class="text-4xl mb-4">⚡</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Performance</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Lightning-fast experiences that don't compromise on functionality 
                or user experience.
              </p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <div class="text-4xl mb-4">🤝</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Community</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Building tools that bring people together and foster collaboration 
                in content creation.
              </p>
            </div>
          </div>
        </div>

        <!-- Technology Section -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Built for the Modern Web
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Umbriel is built on modern web technologies including React, GraphQL, and Node.js. 
              Our architecture is designed for scalability, performance, and developer experience. 
              We embrace open standards and best practices to ensure your content is portable and future-proof.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              From real-time collaboration to AI-powered content suggestions, advanced analytics 
              to flexible theming systems - every feature is crafted with attention to detail 
              and built to handle the demands of modern content workflows.
            </p>
          </div>
        </div>

        <!-- Team Section -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Team
          </h2>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-8">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              We're a passionate team of designers, developers, and product thinkers 
              who believe that great software can empower people to create amazing things. 
              Our diverse backgrounds in technology, design, and content creation drive 
              us to build tools that we ourselves love to use.
            </p>
            <div class="mt-8 text-center">
              <a href="/careers" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                Join our team →
              </a>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="text-center">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Let's Build Something Amazing
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have questions about Umbriel or want to learn more about our mission?
          </p>
          <a href="/contact" class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full transition-colors">
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div>

<style>
  .prose {
    max-width: none;
  }
</style> 