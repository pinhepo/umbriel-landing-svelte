<script>
  import { onMount } from 'svelte';
  import { routes } from '../../../routes.js';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 100);
  });
</script>

<!-- Apple-style Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
  <!-- Minimal background gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-black"></div>
  
  <div class="container relative mx-auto px-6 sm:px-8 lg:px-12 text-center">
    <div class="max-w-7xl mx-auto">
      
      <!-- Apple-style small announcement -->
      <div class="animate-on-load mb-12 {isLoaded ? 'loaded' : ''}">
        <span class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide">
          New
        </span>
      </div>

      <!-- Large Apple-style headline -->
      <h1 class="animate-on-load hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 text-gray-900 dark:text-white leading-none tracking-tight {isLoaded ? 'loaded' : ''}">
        Umbriel CMS
      </h1>
      
      <!-- Apple-style subtitle -->
      <h2 class="animate-on-load hero-subtitle text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-gray-900 dark:text-white leading-tight {isLoaded ? 'loaded' : ''}">
        Content management.<br />
        <span class="font-medium">Reimagined.</span>
      </h2>

      <!-- Minimal description -->
      <p class="animate-on-load hero-description text-lg sm:text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light {isLoaded ? 'loaded' : ''}">
        The most advanced CMS platform designed for modern teams.<br />
        Powerful, intuitive, and built for the future.
      </p>

      <!-- Apple-style action buttons -->
      <div class="animate-on-load hero-buttons flex flex-col sm:flex-row justify-center items-center gap-6 mb-32 {isLoaded ? 'loaded' : ''}">
        <a href={routes.getStarted} class="apple-button-primary group w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-12 text-lg rounded-full transition-all duration-300 ease-out">
          Get Started
        </a>
        <a href={routes.requestDemo} class="apple-button-secondary group w-full sm:w-auto inline-flex items-center justify-center text-blue-600 dark:text-blue-400 hover:underline font-medium py-4 px-8 text-lg transition-all duration-300">
          Watch the film
          <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </a>
      </div>

    

    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600">
    <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
    </svg>
  </div>
</section>

<style>
  /* Apple-style typography */
  .hero-title {
    font-weight: 900;
    letter-spacing: -0.05em;
  }

  .hero-subtitle {
    font-weight: 300;
    letter-spacing: -0.025em;
  }

  .hero-description {
    font-weight: 400;
  }

  /* Apple-style button */
  .apple-button-primary {
    transform: scale(1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  .apple-button-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .apple-button-secondary:hover {
    transform: translateY(-1px);
  }

  /* Staggered animations */
  .hero-title.loaded {
    transition-delay: 0.1s;
  }

  .hero-subtitle.loaded {
    transition-delay: 0.3s;
  }

  .hero-description.loaded {
    transition-delay: 0.5s;
  }

  .hero-buttons.loaded {
    transition-delay: 0.7s;
  }

  .product-showcase-grid.loaded {
    transition-delay: 0.9s;
  }

  /* 3D Perspective */
  .perspective-1000 {
    perspective: 1000px;
  }

  /* Grid Layout */
  .product-showcase-grid {
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 1.2s ease-out, transform 1.2s ease-out;
    position: relative;
    height: 500px;
    margin-top: 2rem;
  }

  .product-showcase-grid.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  /* Main center piece - Analytics Dashboard */
  .grid-item-main {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotateY(0deg) rotateX(2deg);
    width: 50%;
    max-width: 600px;
    z-index: 10;
    animation: float-main 6s ease-in-out infinite;
  }

  /* Left side - Article View */
  .grid-item-left {
    position: absolute;
    top: 12%;
    left: 5%;
    transform: rotateY(12deg) rotateX(8deg) scale(0.75);
    width: 24%;
    max-width: 280px;
    z-index: 5;
    animation: float-left 8s ease-in-out infinite;
  }

  /* Right side - Main Dashboard */
  .grid-item-right {
    position: absolute;
    top: 70%;
    right: 5%;
    transform: rotateY(-12deg) rotateX(8deg) scale(0.7);
    width: 32%;
    max-width: 380px;
    z-index: 5;
    animation: float-right 7s ease-in-out infinite;
  }

  /* Floating background elements */
  .floating-element {
    position: absolute;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    border-radius: 50%;
    z-index: 1;
  }

  .floating-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    right: 10%;
    animation: float-bg-1 12s ease-in-out infinite;
  }

  .floating-2 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 10%;
    animation: float-bg-2 10s ease-in-out infinite;
  }

  .floating-3 {
    width: 100px;
    height: 100px;
    top: 30%;
    left: 20%;
    animation: float-bg-3 14s ease-in-out infinite;
  }

  /* Floating animations */
  @keyframes float-main {
    0%, 100% { transform: translate(-50%, -50%) rotateY(0deg) rotateX(2deg) translateY(0px); }
    50% { transform: translate(-50%, -50%) rotateY(0deg) rotateX(2deg) translateY(-8px); }
  }

  @keyframes float-left {
    0%, 100% { transform: rotateY(12deg) rotateX(8deg) scale(0.75) translateY(0px); }
    50% { transform: rotateY(12deg) rotateX(8deg) scale(0.75) translateY(-12px); }
  }

  @keyframes float-right {
    0%, 100% { transform: rotateY(-12deg) rotateX(8deg) scale(0.7) translateY(0px); }
    50% { transform: rotateY(-12deg) rotateX(8deg) scale(0.7) translateY(-15px); }
  }

  @keyframes float-bg-1 {
    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
    50% { transform: translateY(-30px) translateX(20px); opacity: 0.5; }
  }

  @keyframes float-bg-2 {
    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
    50% { transform: translateY(25px) translateX(-15px); opacity: 0.4; }
  }

  @keyframes float-bg-3 {
    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.25; }
    50% { transform: translateY(-20px) translateX(30px); opacity: 0.45; }
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .product-showcase-grid {
      height: 420px;
    }
    
    .grid-item-main {
      width: 55%;
      max-width: 520px;
    }
    
    .grid-item-left {
      transform: rotateY(10deg) rotateX(6deg) scale(0.65);
      width: 22%;
    }
    
    .grid-item-right {
      transform: rotateY(-10deg) rotateX(6deg) scale(0.6);
      width: 28%;
    }
  }

  @media (max-width: 768px) {
    .product-showcase-grid {
      height: 320px;
    }
    
    .grid-item-main {
      width: 65%;
      max-width: 400px;
      transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
    }
    
    .grid-item-left {
      top: 8%;
      left: 2%;
      width: 22%;
      transform: rotateY(8deg) rotateX(4deg) scale(0.45);
    }
    
    .grid-item-right {
      top: 72%;
      right: 2%;
      width: 28%;
      transform: rotateY(-8deg) rotateX(4deg) scale(0.4);
    }
    
    .floating-element {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .hero-title {
      font-size: 3rem;
      line-height: 1;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      line-height: 1.2;
    }
    
    .product-showcase-grid {
      height: 280px;
    }
    
    .grid-item-main {
      width: 75%;
      max-width: 320px;
    }
    
    .grid-item-left,
    .grid-item-right {
      opacity: 0.6;
    }
    
    .grid-item-left {
      width: 20%;
      transform: rotateY(5deg) rotateX(2deg) scale(0.35);
    }
    
    .grid-item-right {
      width: 25%;
      transform: rotateY(-5deg) rotateX(2deg) scale(0.3);
    }
  }
</style> 