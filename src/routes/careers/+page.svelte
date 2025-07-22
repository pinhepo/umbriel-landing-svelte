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
  <title>Careers - Umbriel CMS</title>
  <meta name="description" content="Join the Umbriel CMS team and help us build the future of content management. Explore career opportunities and work with cutting-edge technology." />
</svelte:head>

<div class="bg-white dark:bg-black min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-none">
          Join Our Team
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12">
          Help us build the future of content management and work with amazing people.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="container mx-auto px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        
        <!-- Why Work With Us -->
        <!-- <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Why Umbriel is an Awesome Place to Work
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-2xl p-8">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Cutting-Edge Technology</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Work with the latest technologies including React, GraphQL, Node.js, and AI integrations. 
                Push the boundaries of what's possible in web development.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 rounded-2xl p-8">
              <div class="text-4xl mb-4">🌟</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Meaningful Impact</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Your work directly impacts thousands of content creators and businesses worldwide. 
                Build features that make a real difference.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-900/20 rounded-2xl p-8">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Growth & Learning</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Continuous learning opportunities, conference attendance, and mentorship programs. 
                We invest in your professional development.
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 rounded-2xl p-8">
              <div class="text-4xl mb-4">🤝</div>
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Amazing Team</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Work alongside passionate, talented individuals who share your love for creating 
                exceptional software and user experiences.
              </p>
            </div>
          </div>
        </div> -->

        <!-- Perks & Benefits -->
        <!-- <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Perks & Benefits
          </h2>
          
          <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="text-3xl mb-3">💰</div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Competitive Salary</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Above-market compensation packages</p>
              </div>
                             <div class="text-center">
                 <div class="text-3xl mb-3">🏠</div>
                 <h4 class="font-bold text-gray-900 dark:text-white mb-2">Remote-First</h4>
                 <p class="text-sm text-gray-600 dark:text-gray-300">Work from anywhere in the world</p>
               </div>
               <div class="text-center">
                 <div class="text-3xl mb-3">⏰</div>
                 <h4 class="font-bold text-gray-900 dark:text-white mb-2">Flexible Hours</h4>
                 <p class="text-sm text-gray-600 dark:text-gray-300">Work when you're most productive</p>
               </div>
              <div class="text-center">
                <div class="text-3xl mb-3">🏥</div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Health Benefits</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Comprehensive health coverage</p>
              </div>
              <div class="text-center">
                <div class="text-3xl mb-3">📚</div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Learning Budget</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Annual budget for courses and conferences</p>
              </div>
              <div class="text-center">
                <div class="text-3xl mb-3">🌴</div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Unlimited PTO</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Take time off when you need it</p>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Open Positions -->
        <div class="mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Current Openings
          </h2>
          
          <!-- No openings message -->
          <div class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <div class="text-6xl mb-8">🎯</div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              No Current Openings
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              We don't have any specific positions open at the moment, but we're always interested 
              in connecting with talented individuals who are passionate about content management 
              and modern web technologies.
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
              If you think you'd be a great fit for our team, we'd love to hear from you! 
              Send us your information and we'll keep you in mind for future opportunities.
            </p>
            <a 
              href="mailto:careers@umbrielcms.com.br?subject=Future Opportunities" 
              class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Express Interest
            </a>
          </div>
        </div>

        <!-- Stay Connected Section -->
        <div class="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-12">
          <div class="text-6xl mb-8">💌</div>
          <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Stay Connected
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            We're always growing and looking for amazing people to join our mission. 
            Even if there are no openings now, we'd love to connect with talented individuals 
            who share our passion for great software.
          </p>
          <a 
            href="mailto:careers@umbrielcms.com.br" 
            class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            careers@umbrielcms.com.br
          </a>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-4">
            Tell us about yourself, your experience, and what interests you about Umbriel
          </p>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div> 