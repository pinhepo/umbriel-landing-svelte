<script lang="ts">
  import Header from '$lib/components/landing/Header.svelte';
  import Hero from '$lib/components/landing/Hero.svelte';
  import Features from '$lib/components/landing/Features.svelte';
  import AISection from '$lib/components/landing/AISection.svelte';
  import Testimonials from '$lib/components/landing/Testimonials.svelte';
  import CTA from '$lib/components/landing/CTA.svelte';
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

<div class="bg-white dark:bg-gray-900 min-h-screen">
  <Header {isDarkMode} {toggleTheme} />
  <Hero />
  <Features />
  <AISection />
  <Testimonials />
  <CTA />
  <Footer />
</div>

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

  :global(.animate-on-load),
  :global(.animate-on-scroll) {
    opacity: 0;
    transform: translateY(30px);
    transition-property: opacity, transform;
    transition-duration: 0.7s;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  :global(.animate-on-load.loaded),
  :global(.animate-on-scroll.loaded) {
    opacity: 1;
    transform: translateY(0);
  }
</style>
