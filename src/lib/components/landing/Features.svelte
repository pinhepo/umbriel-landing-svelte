<script lang="ts">
  import { onMount } from 'svelte';

  interface Feature {
    icon: string;
    title: string;
    description: string;
    color: string;
  }

  const features: Feature[] = [
    {
      icon: 'layout-dashboard',
      title: 'Intuitive Dashboard',
      description: 'Manage your content and settings from a clean, user-friendly interface designed for productivity.',
      color: 'blue'
    },
    {
      icon: 'edit-3',
      title: 'Rich Text Editor',
      description: 'Create and format content effortlessly with our powerful WYSIWYG editor that feels natural to use.',
      color: 'purple'
    },
    {
      icon: 'languages',
      title: 'Multi-Language Support',
      description: 'Reach a global audience with built-in localization features that make translation management simple.',
      color: 'green'
    },
    {
      icon: 'settings-2',
      title: 'Customizable Fields',
      description: 'Build your perfect content model with flexible field types that adapt to your unique needs.',
      color: 'orange'
    },
    {
      icon: 'shield-check',
      title: 'Secure & Reliable',
      description: 'Rest easy knowing your content is protected by enterprise-grade security and regular backups.',
      color: 'red'
    },
    {
      icon: 'code-2',
      title: 'Developer-Friendly API',
      description: 'Integrate seamlessly with any tech stack using our comprehensive and well-documented API.',
      color: 'indigo'
    }
  ];

  let observer: IntersectionObserver;
  let featureElements: HTMLElement[] = [];

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    setTimeout(() => {
      featureElements.forEach(el => {
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      if (observer) {
        featureElements.forEach(el => {
          if (el) observer.unobserve(el);
        });
      }
    };
  });
</script>

<section class="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-24 sm:py-32">
  <!-- Decorative elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-1/2 left-0 w-72 h-72 bg-purple-100/50 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl"></div>
    <div class="absolute top-1/2 right-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl"></div>
  </div>

  <div class="container relative mx-auto px-4 sm:px-6">
    <div class="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <span class="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
        Powerful Features
      </span>
      <h2 class="animate-on-scroll text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
        Everything you need to manage content
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Built for modern teams who value simplicity, power, and flexibility.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {#each features as feature, i}
        <div 
          class="feature-card group relative bg-white dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg backdrop-blur-sm {feature.color}-card"
          bind:this={featureElements[i]}
        >
          <!-- Card gradient overlay -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/50 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none"></div>
          
          <div class="relative">
            <div class="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-{feature.color}-100 dark:bg-{feature.color}-900/30">
              <img 
                src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/{feature.icon}.svg" 
                alt="{feature.title} icon" 
                class="w-7 h-7 text-{feature.color}-600 dark:text-{feature.color}-400 dark:invert-[.85]"
              >
            </div>
            
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-{feature.color}-600 dark:group-hover:text-{feature.color}-400 transition-colors">
              {feature.title}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>

          <!-- Hover effect border -->
          <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-{feature.color}-400/30 dark:group-hover:border-{feature.color}-400/20 transition-colors"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .feature-card {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .feature-card:not(.loaded) {
    opacity: 0;
    transform: translateY(30px);
  }

  .feature-card.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  .feature-card:hover {
    transform: translateY(-4px);
  }

  /* Generate staggered animation delays */
  .feature-card:nth-child(1) { transition-delay: 0.1s; }
  .feature-card:nth-child(2) { transition-delay: 0.2s; }
  .feature-card:nth-child(3) { transition-delay: 0.3s; }
  .feature-card:nth-child(4) { transition-delay: 0.4s; }
  .feature-card:nth-child(5) { transition-delay: 0.5s; }
  .feature-card:nth-child(6) { transition-delay: 0.6s; }

  /* Color-specific background styles */
  .blue-card { @apply bg-blue-50 dark:bg-transparent; }
  .purple-card { @apply bg-purple-50 dark:bg-transparent; }
  .green-card { @apply bg-green-50 dark:bg-transparent; }
  .orange-card { @apply bg-orange-50 dark:bg-transparent; }
  .red-card { @apply bg-red-50 dark:bg-transparent; }
  .indigo-card { @apply bg-indigo-50 dark:bg-transparent; }
</style> 