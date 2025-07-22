<script>
  import { onMount } from 'svelte';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 300);
  });

  const apiEndpoints = [
    { method: "POST", endpoint: "/api/theme/configuration", description: "Configure client themes" },
    { method: "GET", endpoint: "/api/tenant/config", description: "Multi-tenant configuration" },
    { method: "POST", endpoint: "/api/articles", description: "Create new articles" },
    { method: "GET", endpoint: "/api/analytics/realtime", description: "Real-time analytics data" },
    { method: "POST", endpoint: "/api/mcp/documentation", description: "AI-powered documentation" },
    { method: "GET", endpoint: "/api/blocks/templates", description: "Block templates library" }
  ];

  const integrationExamples = [
    {
      title: "Theme Configuration",
      description: "Implement custom client themes with color and font mapping",
      code: `interface ThemeConfiguration {
  colors: string[];
  colorMapping: {
    light: ColorScheme;
    dark: ColorScheme;
  };
  fonts: FontMapping;
}`
    },
    {
      title: "Block System Integration",
      description: "Integrate with the advanced Flex Block Builder",
      code: `const FlexBlock = {
  id: "block-id",
  type: "flex",
  layout: "text-image",
  responsive: true,
  content: { ... }
}`
    },
    {
      title: "Real-time Updates",
      description: "WebSocket integration for live collaboration",
      code: `const subscription = apollo.subscribe({
  query: CONTENT_UPDATES,
  variables: { articleId }
}).subscribe(handleUpdate);`
    }
  ];

  const developerTools = [
    {
      icon: "📚",
      title: "GraphQL Playground",
      description: "Interactive API explorer with real-time schema documentation and query testing."
    },
    {
      icon: "🔧",
      title: "TypeScript Support",
      description: "Full TypeScript integration with auto-generated types from GraphQL schema."
    },
    {
      icon: "🚀",
      title: "Webhook Integration",
      description: "Real-time notifications for content changes, publishing events, and user actions."
    },
    {
      icon: "📊",
      title: "Analytics API",
      description: "Comprehensive analytics data with custom metrics and real-time reporting."
    },
    {
      icon: "🎨",
      title: "Theme Engine",
      description: "Advanced theming system with client-specific customizations and branding."
    },
    {
      icon: "🔐",
      title: "Security First",
      description: "Auth0 integration, RBAC, CORS protection, and enterprise-grade security."
    }
  ];

  const frameworks = [
    { name: "Next.js", logo: "⚛️", supported: true },
    { name: "Nuxt.js", logo: "💚", supported: true },
    { name: "Gatsby", logo: "🟣", supported: true },
    { name: "SvelteKit", logo: "🧡", supported: true },
    { name: "Angular", logo: "🔴", supported: true },
    { name: "Vue.js", logo: "💚", supported: true }
  ];
</script>

<!-- Developer Resources Section -->
<section class="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 py-24 md:py-32">
  <div class="container mx-auto px-6 lg:px-12">
    
    <!-- Section Header -->
    <div class="text-center mb-20">
      <div class="animate-on-scroll mb-8 {isLoaded ? 'loaded' : ''}">
        <span class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase">
          Developer Resources
        </span>
      </div>
      
      <h2 class="animate-on-scroll text-5xl lg:text-7xl xl:text-8xl font-black mb-8 text-gray-900 dark:text-white leading-none tracking-tight {isLoaded ? 'loaded' : ''}">
        Built for<br />
        <span class="text-blue-600 dark:text-blue-400">Developers</span>
      </h2>
      
      <p class="animate-on-scroll text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-4xl mx-auto {isLoaded ? 'loaded' : ''}">
        Comprehensive APIs, extensive documentation, and powerful integration tools. 
        Everything you need to build amazing content experiences.
      </p>
    </div>

    <!-- API Endpoints -->
    <div class="animate-on-scroll mb-24 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        RESTful & GraphQL APIs
      </h3>
      
      <div class="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl">
        <div class="bg-gray-900 dark:bg-black px-6 py-4">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-gray-400 ml-4 font-mono text-sm">Umbriel API Documentation</span>
          </div>
        </div>
        
        <div class="p-8">
          <div class="space-y-4">
            {#each apiEndpoints as endpoint}
              <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div class="flex items-center space-x-4">
                  <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs font-mono font-bold">
                    {endpoint.method}
                  </span>
                  <code class="font-mono text-gray-900 dark:text-gray-100">{endpoint.endpoint}</code>
                </div>
                <span class="text-gray-600 dark:text-gray-400 text-sm">{endpoint.description}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <!-- Integration Examples -->
    <div class="animate-on-scroll mb-24 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Integration Examples
      </h3>
      
      <div class="grid lg:grid-cols-3 gap-8">
        {#each integrationExamples as example}
          <div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="p-6 border-b border-gray-200 dark:border-gray-700">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{example.title}</h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">{example.description}</p>
            </div>
            <div class="bg-gray-900 dark:bg-black p-6">
              <pre class="text-green-400 text-sm font-mono overflow-x-auto"><code>{example.code}</code></pre>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Developer Tools -->
    <div class="animate-on-scroll mb-24 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Developer Tools
      </h3>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each developerTools as tool}
          <div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
            <div class="text-4xl mb-4">{tool.icon}</div>
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {tool.title}
            </h4>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {tool.description}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Framework Support -->
    <div class="animate-on-scroll bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-12 {isLoaded ? 'loaded' : ''}">
      <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Framework Agnostic
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Umbriel CMS integrates seamlessly with any modern frontend framework. 
        Choose your preferred stack and start building.
      </p>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {#each frameworks as framework}
          <div class="text-center group cursor-pointer">
            <div class="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-200">
              {framework.logo}
            </div>
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {framework.name}
            </div>
            <div class="text-xs text-green-600 dark:text-green-400 mt-1">
              ✓ Supported
            </div>
          </div>
        {/each}
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

  code {
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style> 