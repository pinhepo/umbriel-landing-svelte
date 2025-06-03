<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let isLoaded = false;
  let isGenerating = false;
  let userInput = '';
  let generatedText = '';
  let errorMessage = '';
  let showResult = false;
  let showError = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 100);
  });

  async function generateTagline() {
    if (!userInput.trim()) {
      errorMessage = 'Please describe your project or idea first.';
      showError = true;
      showResult = false;
      return;
    }

    isGenerating = true;
    showError = false;
    showResult = false;

    const prompt = `Generate 3 short, catchy taglines for the following project idea: "${userInput}". Each tagline should be on a new line.`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = ""; // Left empty as per instructions, Canvas will provide it
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API Error:', errorData);
        throw new Error(`API request failed with status ${response.status}: ${errorData?.error?.message || 'Unknown error'}`);
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        generatedText = result.candidates[0].content.parts[0].text;
        showResult = true;
      } else {
        console.error('Unexpected API response structure:', result);
        throw new Error('Could not extract tagline from API response.');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      errorMessage = `An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`;
      showError = true;
    } finally {
      isGenerating = false;
    }
  }
</script>

<section class="relative bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20 py-24 sm:py-32 overflow-hidden">
  <!-- Decorative elements -->
  <div class="absolute inset-0">
    <div class="absolute -top-40 -right-32 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl"></div>
    <div class="absolute -bottom-40 -left-32 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl"></div>
  </div>

  <div class="container relative mx-auto px-4 sm:px-6">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full">
        AI-Powered Features
      </span>
      
      <h2 class="animate-on-scroll text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 {isLoaded ? 'loaded' : ''}">
        ✨ Spark Your Creativity with AI ✨
      </h2>
      
      <p class="animate-on-scroll text-lg text-gray-600 dark:text-gray-300 {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.2s;">
        Need a catchy tagline for your next project or blog post? Let our AI assistant help you craft the perfect message.
      </p>
    </div>

    <div class="animate-on-scroll max-w-2xl mx-auto {isLoaded ? 'loaded' : ''}" style="transition-delay: 0.4s;">
      <div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/50 to-white/0 dark:from-white/5 dark:to-white/0 pointer-events-none"></div>
        
        <div class="relative">
          <div class="mb-6">
            <label for="ai-prompt-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Describe your project or idea
            </label>
            <div class="relative">
              <textarea 
                id="ai-prompt-input"
                bind:value={userInput}
                rows="3"
                class="ai-input w-full p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 dark:bg-gray-900/50 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                placeholder="e.g., A travel blog focusing on sustainable tourism in Southeast Asia..."
              ></textarea>
              <div class="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-focus-within:border-purple-500/30 dark:group-focus-within:border-purple-400/20 transition-colors"></div>
            </div>
          </div>

          <button 
            on:click={generateTagline}
            disabled={isGenerating}
            class="group w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-400 dark:hover:to-blue-400 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {#if isGenerating}
              <div class="loader mr-3"></div>
              <span>Crafting Your Taglines...</span>
            {:else}
              <span class="flex items-center">
                Generate Ideas
                <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            {/if}
          </button>

          {#if showResult}
            <div in:fly="{{ y: 20, duration: 400 }}" class="mt-8 space-y-4">
              {#each generatedText.split('\n').filter(line => line.trim()) as tagline}
                <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800 text-left">
                  <p class="text-lg text-gray-800 dark:text-gray-200">{tagline}</p>
                </div>
              {/each}
            </div>
          {/if}

          {#if showError}
            <div in:fly="{{ y: 20, duration: 400 }}" class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300">
              <p class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errorMessage}
              </p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .ai-input {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ai-input:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.1);
  }

  .dark .ai-input:focus {
    box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.2);
  }

  .loader {
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 3px solid #ffffff;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Enhance animations */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-on-scroll.loaded {
    opacity: 1;
    transform: translateY(0);
  }
</style> 