<script>
  import { onMount } from 'svelte';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 300);
  });

  const techStack = [
    { category: "Frontend", items: ["React 18+", "TypeScript", "Vite", "Tailwind CSS"] },
    { category: "State Management", items: ["Redux Toolkit", "React Query", "Apollo Client"] },
    { category: "UI/UX", items: ["Radix UI", "Framer Motion", "Responsive Design", "Dark Mode"] },
    { category: "Backend Integration", items: ["GraphQL", "WebSocket", "REST APIs", "Real-time Updates"] },
    { category: "Authentication", items: ["Auth0", "JWT", "Protected Routes", "RBAC"] },
    { category: "Rich Content", items: ["TipTap Editor", "Block Builder", "Media Management", "SEO"] }
  ];

  const enterpriseFeatures = [
    {
      title: "Advanced Block System",
      description: "Flex Block Builder with drag-and-drop functionality, custom layouts, and responsive design.",
      icon: "🧩"
    },
    {
      title: "Real-time Collaboration",
      description: "WebSocket-powered live editing, instant updates, and team collaboration features.",
      icon: "🔄"
    },
    {
      title: "Enterprise Security",
      description: "Auth0 integration, CORS protection, JWT handling, and role-based access control.",
      icon: "🔒"
    },
    {
      title: "Performance Optimized",
      description: "Lazy loading, code splitting, image optimization, and advanced caching strategies.",
      icon: "⚡"
    },
    {
      title: "Rich Media Support",
      description: "Cloudinary integration, video optimization, document processing, and advanced galleries.",
      icon: "🎬"
    },
    {
      title: "Developer Friendly",
      description: "TypeScript support, GraphQL code generation, comprehensive APIs, and extensive documentation.",
      icon: "👨‍💻"
    }
  ];

  const blockTypes = [
    {
      name: "Flex Block Builder",
      description: "Advanced layout system with custom configurations",
      image: "https://umbsys.api.cms.umbrielcms.com.br/uploads/9c402a69eb590c5f1cf8-screenshot_2025_07_21_224513.png?width=3521&height=1639"
    },
    {
      name: "Video Hero Blocks",
      description: "Stunning video backgrounds with overlay content",
      image: "https://umbsys.api.cms.umbrielcms.com.br/uploads/e3048e08bc933ec21b6d-screenshot_2025_07_21_203809.png?width=600&height=400"
    },
    {
      name: "Rich Text Editor",
      description: "TipTap-powered editor with advanced formatting",
      image: "https://umbsys.api.cms.umbrielcms.com.br/uploads/fee87dd78a82e11b40ed-screenshot_2025_07_21_202634.png?width=600&height=400"
    }
  ];
</script>

<!-- Technical Overview Section -->
<section class="bg-black dark:bg-gray-950 py-24 md:py-32 overflow-hidden">
  <div class="container mx-auto px-6 lg:px-12">
    
    <!-- Section Header -->
    <div class="text-center mb-20">
      <div class="animate-on-scroll mb-8 {isLoaded ? 'loaded' : ''}">
        <span class="inline-flex items-center text-sm font-medium text-blue-400 tracking-wide uppercase">
          Technical Overview
        </span>
      </div>
      
      <h2 class="animate-on-scroll text-5xl lg:text-7xl xl:text-8xl font-black mb-8 text-white leading-none tracking-tight {isLoaded ? 'loaded' : ''}">
        Enterprise-Grade<br />
        <span class="text-blue-400">Architecture</span>
      </h2>
      
      <p class="animate-on-scroll text-xl lg:text-2xl text-gray-300 font-light max-w-4xl mx-auto {isLoaded ? 'loaded' : ''}">
        Built with cutting-edge technologies and modern development practices. 
        Umbriel CMS delivers unmatched performance, security, and scalability.
      </p>
    </div>

    <!-- Tech Stack Grid -->
    <div class="animate-on-scroll mb-24 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
        Modern Tech Stack
      </h3>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each techStack as category}
          <div class="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300">
            <h4 class="text-xl font-bold text-blue-400 mb-4">{category.category}</h4>
            <ul class="space-y-2">
              {#each category.items as item}
                <li class="text-gray-300 flex items-center">
                  <span class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  {item}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <!-- Enterprise Features -->
    <div class="animate-on-scroll mb-24 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
        Enterprise Features
      </h3>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each enterpriseFeatures as feature}
          <div class="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div class="text-4xl mb-4">{feature.icon}</div>
            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {feature.title}
            </h4>
            <p class="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Block Types Showcase -->
    <div class="animate-on-scroll mb-24 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
        Advanced Block System
      </h3>
      
      <div class="grid lg:grid-cols-3 gap-8">
        {#each blockTypes as block}
          <div class="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <div class="aspect-video overflow-hidden">
              <img 
                src={block.image}
                alt={block.name}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h4 class="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {block.name}
              </h4>
              <p class="text-gray-400 text-sm">
                {block.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Performance Stats -->
    <div class="animate-on-scroll bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-3xl p-12 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
        Performance & Scale
      </h3>
      
      <div class="grid md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-4xl lg:text-5xl font-black text-blue-400 mb-2">99.9%</div>
          <div class="text-gray-300 font-medium">Uptime</div>
        </div>
        <div>
          <div class="text-4xl lg:text-5xl font-black text-blue-400 mb-2">&lt;100ms</div>
          <div class="text-gray-300 font-medium">API Response</div>
        </div>
        <div>
          <div class="text-4xl lg:text-5xl font-black text-blue-400 mb-2">∞</div>
          <div class="text-gray-300 font-medium">Scalability</div>
        </div>
        <div>
          <div class="text-4xl lg:text-5xl font-black text-blue-400 mb-2">24/7</div>
          <div class="text-gray-300 font-medium">Monitoring</div>
        </div>
      </div>
    </div>

  </div>
</section>

<style>
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .animate-on-scroll.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  .animate-on-scroll:nth-child(2).loaded {
    transition-delay: 0.2s;
  }

  .animate-on-scroll:nth-child(3).loaded {
    transition-delay: 0.4s;
  }

  .animate-on-scroll:nth-child(4).loaded {
    transition-delay: 0.6s;
  }
</style> 