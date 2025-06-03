<script lang="ts">
  import { onMount } from 'svelte';

  interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
  }

  const testimonials: Testimonial[] = [
    {
      quote: "Umbriel CMS completely transformed how we manage our website content. The intuitive interface and powerful features have significantly improved our workflow efficiency.",
      author: "Jane Doe",
      role: "CEO",
      company: "Example Inc.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      rating: 5
    },
    {
      quote: "The multi-language support is a game-changer for our global audience. We've seen a 40% increase in international engagement since implementing Umbriel.",
      author: "John Smith",
      role: "Lead Developer",
      company: "Global Solutions",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      rating: 5
    },
    {
      quote: "The API documentation and developer experience are outstanding. We integrated Umbriel into our existing systems in record time.",
      author: "Sarah Lee",
      role: "CTO",
      company: "Tech Innovations",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5
    }
  ];

  let observer: IntersectionObserver;
  let testimonialElements: HTMLElement[] = [];

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
      testimonialElements.forEach(el => {
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      if (observer) {
        testimonialElements.forEach(el => {
          if (el) observer.unobserve(el);
        });
      }
    };
  });
</script>

<section class="relative bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 py-24 sm:py-32 overflow-hidden">
  <!-- Decorative elements -->
  <div class="absolute inset-0">
    <div class="absolute top-1/2 -translate-y-1/2 -left-64 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl"></div>
    <div class="absolute top-1/2 -translate-y-1/2 -right-64 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl"></div>
  </div>

  <div class="container relative mx-auto px-4 sm:px-6">
    <div class="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <span class="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
        Customer Stories
      </span>
      <h2 class="animate-on-scroll text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Loved by teams worldwide
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        See why thousands of content teams choose Umbriel CMS as their content management solution.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-sm mx-auto md:max-w-none">
      {#each testimonials as testimonial, i}
        <div 
          class="testimonial-card group relative bg-white dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg backdrop-blur-sm"
          bind:this={testimonialElements[i]}
        >
          <!-- Card gradient overlay -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/50 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none"></div>
          
          <div class="relative">
            <!-- Quote icon -->
            <div class="absolute -top-4 -left-2 text-blue-200 dark:text-blue-900">
              <svg class="w-8 h-8 transform -rotate-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 27.2c-2.688 0-4.848-.816-6.48-2.448C1.24 23.12.424 20.944.424 18.224c0-3.072.744-5.824 2.232-8.256C4.144 7.536 6.568 5.24 9.928 3.08l1.872 3.12c-2.432 1.536-4.096 3.008-4.992 4.416-.896 1.408-1.344 2.864-1.344 4.368 0 .832.144 1.536.432 2.112.288.576.72 1.04 1.296 1.392 2.112-1.856 4.48-2.784 7.104-2.784 2.112 0 3.84.656 5.184 1.968 1.344 1.312 2.016 3.024 2.016 5.136 0 2.304-.72 4.144-2.16 5.52-1.44 1.376-3.328 2.064-5.664 2.064-.576 0-1.264-.064-2.064-.192h-2.256zm16.8 0c-2.688 0-4.848-.816-6.48-2.448-1.632-1.632-2.448-3.808-2.448-6.528 0-3.072.744-5.824 2.232-8.256 1.488-2.432 3.912-4.728 7.272-6.888l1.872 3.12c-2.432 1.536-4.096 3.008-4.992 4.416-.896 1.408-1.344 2.864-1.344 4.368 0 .832.144 1.536.432 2.112.288.576.72 1.04 1.296 1.392 2.112-1.856 4.48-2.784 7.104-2.784 2.112 0 3.84.656 5.184 1.968 1.344 1.312 2.016 3.024 2.016 5.136 0 2.304-.72 4.144-2.16 5.52-1.44 1.376-3.328 2.064-5.664 2.064-.576 0-1.264-.064-2.064-.192h-2.256z"/>
              </svg>
            </div>

            <!-- Rating -->
            <div class="flex justify-center mb-6">
              {#each Array(testimonial.rating) as _, star}
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              {/each}
            </div>

            <!-- Quote -->
            <p class="text-gray-700 dark:text-gray-200 mb-8 text-lg leading-relaxed">
              "{testimonial.quote}"
            </p>

            <!-- Author info -->
            <div class="flex items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author}
                class="w-12 h-12 rounded-full border-2 border-blue-100 dark:border-blue-900/30"
              >
              <div class="ml-4 text-left">
                <p class="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          </div>

          <!-- Hover border effect -->
          <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 dark:group-hover:border-blue-400/20 transition-colors"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonial-card {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .testimonial-card:not(.loaded) {
    opacity: 0;
    transform: translateY(30px);
  }

  .testimonial-card.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  .testimonial-card:hover {
    transform: translateY(-4px);
  }

  /* Generate staggered animation delays */
  .testimonial-card:nth-child(1) { transition-delay: 0.1s; }
  .testimonial-card:nth-child(2) { transition-delay: 0.2s; }
  .testimonial-card:nth-child(3) { transition-delay: 0.3s; }
</style> 