<script lang="ts">
  import { onMount } from 'svelte';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 100);
  });
</script>


<!-- Content Editor Section -->
<section class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 py-24 md:py-32">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      <!-- Text Content -->
      <div>
        <h2 class="text-6xl lg:text-8xl xl:text-9xl font-black mb-6 text-gray-900 dark:text-white leading-none">
          Intuitive.
        </h2>
        <h3 class="text-2xl lg:text-4xl font-light mb-8 text-gray-900 dark:text-white">
          Content creation like you've never experienced.
        </h3>
        <p class="text-lg lg:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-lg">
          A powerful editor that feels natural. Write, edit, and publish with tools that get out of your way.
        </p>
      </div>

      <!-- Visual Content -->
      <div class="relative">
        <img 
          src="https://umbsys.api.cms.umbrielcms.com.br/uploads/fee87dd78a82e11b40ed-screenshot_2025_07_21_202634.png?width=3565&height=2020"
          alt="Umbriel CMS Content Editor"
          class="w-full max-w-none lg:w-[120%] lg:-mr-20 xl:w-[130%] xl:-mr-32 rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

    </div>
  </div>
</section>

<!-- Analytics Section - Optimized for large image -->
<section class="bg-black py-32 md:py-40">
  <div class="container mx-auto px-6 lg:px-12 max-w-7xl">
    
    <!-- Text Content - Centered and prominent -->
    <div class="text-center mb-16 lg:mb-24">
      <h2 class="text-6xl lg:text-8xl xl:text-9xl font-black mb-8 text-white leading-none">
        Insights.
      </h2>
      <h3 class="text-2xl lg:text-4xl font-light mb-8 text-white max-w-3xl mx-auto">
        Data that drives decisions.
      </h3>
      <p class="text-lg lg:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
        Understand your content performance with beautiful analytics that reveal what matters most.
      </p>
    </div>

    <!-- Large Image Showcase -->
    <div class="relative">
      <img 
        src="https://umbsys.api.cms.umbrielcms.com.br/uploads/e7c37a84013f17d8d0db-screenshot_2025_07_21_203516.png?width=2306&height=2086"
        alt="Umbriel CMS Analytics Dashboard - Comprehensive insights"
        class="w-full rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]"
        loading="lazy"
      />
      <!-- Subtle overlay for depth -->
      <div class="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
    </div>

  </div>
</section>

<!-- Mobile Section - Optimized for vertical image -->
<section class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-32 md:py-40">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid lg:grid-cols-3 gap-16 lg:gap-24 items-center">
      
      <!-- Text Content - Takes 2 columns -->
      <div class="lg:col-span-2">
        <h2 class="text-6xl lg:text-8xl xl:text-9xl font-black mb-6 text-gray-900 dark:text-white leading-none">
          Mobile.
        </h2>
        <h3 class="text-2xl lg:text-4xl font-light mb-8 text-gray-900 dark:text-white">
          Manage content anywhere.
        </h3>
        <p class="text-lg lg:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-2xl">
          Full CMS power in your pocket. Edit, publish, and monitor your content from any device, anywhere in the world.
        </p>
      </div>

      <!-- Mobile Image - Takes 1 column, optimized for vertical -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative max-w-xs lg:max-w-sm">
          <img 
            src="https://umbsys.api.cms.umbrielcms.com.br/uploads/208c5470d8d864a1d8ee-screenshot_2025_07_21_203038.png?width=675&height=1881"
            alt="Umbriel CMS Mobile Interface"
            class="w-full rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-t from-green-500/10 to-transparent pointer-events-none"></div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Beautiful Content Templates Section - Highlighting elegant design -->
<section class="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-32 md:py-40 lg:py-48">
  <div class="container mx-auto px-6 lg:px-12 max-w-8xl">
    <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20 items-center">
      
      <!-- Text Content - Takes 2 columns -->
      <div class="lg:col-span-2">
        <h2 class="text-6xl lg:text-7xl xl:text-8xl font-black mb-6 text-white leading-none tracking-tight">
          Beautiful.
        </h2>
        <h3 class="text-2xl lg:text-3xl xl:text-4xl font-light mb-8 text-white leading-tight">
          Elegant content design made simple.
        </h3>
        <p class="text-lg lg:text-xl xl:text-2xl text-gray-200 font-light mb-8 leading-relaxed">
          Create stunning articles with professionally designed templates. Your content deserves to look as good as it reads.
        </p>
        
        <!-- Feature highlights -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span class="text-gray-300 font-medium">Professional templates</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span class="text-gray-300 font-medium">Custom typography</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
            <span class="text-gray-300 font-medium">Responsive layouts</span>
          </div>
        </div>
      </div>

      <!-- Large Content Template Showcase - Takes 3 columns -->
      <div class="lg:col-span-3">
        <div class="relative group">
          <img 
            src="https://umbsys.api.cms.umbrielcms.com.br/uploads/bf7c29573cf041f852f5-screenshot_2025_07_21_202725.png?width=3822&height=2067"
            alt="Umbriel CMS Beautiful Content Template - Professional article design"
            class="w-full rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] group-hover:shadow-pink-500/20"
            loading="lazy"
          />
          
          <!-- Enhanced overlay for elegance -->
          <div class="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-t from-pink-900/30 via-purple-900/10 to-transparent pointer-events-none"></div>
          
          <!-- Floating elements for emphasis -->
          <div class="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full blur-sm opacity-60"></div>
          <div class="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full blur-md opacity-40"></div>
          
          <!-- Content type badge -->
          <div class="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span class="text-white text-sm font-medium">✨ Professional Template</span>
          </div>
        </div>
        
        <!-- Template description -->
        <div class="mt-6 text-center">
          <p class="text-gray-300 font-light text-lg">
            Magazine-quality layouts that make every article shine
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  /* Enhanced hover effects */
  img {
    transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Custom shadow for more depth */
  .hover\:shadow-3xl:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  /* Special glow effect for beautiful content section */
  .group:hover .group-hover\:shadow-pink-500\/20 {
    box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.2);
  }

  /* Max width extension for larger showcase */
  .max-w-8xl {
    max-width: 96rem;
  }
</style> 