<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { mutate } from '$lib/graphql/client';
  import { SEND_INVITE } from '$lib/graphql/mutations';
  import { rateLimiter, rateLimitStore, updateRateLimitStore } from '$lib/stores/rateLimiter';
  import { validateEmail, type EmailValidationResult } from '$lib/utils/emailValidator';
  
  export let isOpen = false;
  
  const dispatch = createEventDispatcher();
  
  let name = '';
  let email = '';
  let isLoading = false;
  let isSuccess = false;
  let errorMessage = '';
  let emailValidation: EmailValidationResult = { isValid: true };
  
  // Reactive validation
  $: emailValidation = email ? validateEmail(email) : { isValid: true };
  $: isFormValid = name.trim() && email.trim() && emailValidation.isValid && !$rateLimitStore.blocked;
  
  onMount(() => {
    updateRateLimitStore();
    
    // Update rate limit store periodically
    const interval = setInterval(updateRateLimitStore, 1000);
    return () => clearInterval(interval);
  });
  
  function closeModal() {
    isOpen = false;
    dispatch('close');
    // Reset form after animation
    setTimeout(() => {
      name = '';
      email = '';
      isSuccess = false;
      errorMessage = '';
    }, 300);
  }
  
  async function handleSubmit() {
    // Verificar rate limiting
    const rateLimitCheck = rateLimiter.recordAttempt();
    updateRateLimitStore();
    
    if (rateLimitCheck.blocked) {
      const timeRemaining = rateLimiter.formatTimeRemaining(rateLimitCheck.remainingTime || 0);
      errorMessage = `Too many attempts. Please wait ${timeRemaining} before trying again.`;
      return;
    }
    
    // Validar campos
    if (!name.trim() || !email.trim()) {
      errorMessage = 'Please fill in all fields';
      return;
    }
    
    // Validar email
    if (!emailValidation.isValid) {
      errorMessage = emailValidation.error || 'Invalid email address';
      return;
    }
    
    isLoading = true;
    errorMessage = '';
    
    try {
      const result = await mutate(SEND_INVITE, {
        name: name.trim(),
        email: email.trim()
      });
      
      if (result?.sendInvite?.token) {
        isSuccess = true;
        setTimeout(() => {
          closeModal();
        }, 2000);
      }
    } catch (error) {
      console.error('Error sending invite:', error);
      errorMessage = 'Failed to send invite. Please try again.';
    } finally {
      isLoading = false;
    }
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <!-- Modal Backdrop -->
  <div 
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    on:click={closeModal}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <!-- Modal Content -->
    <div 
      class="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100"
      on:click|stopPropagation
    >
      {#if isSuccess}
        <!-- Success State -->
        <div class="text-center">
          <div class="text-6xl mb-6">🎉</div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome Aboard!
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            We've sent an invite to your email. Check your inbox to get started with Umbriel CMS!
          </p>
        </div>
      {:else}
        <!-- Form State -->
        <div class="text-center mb-8">
          <div class="text-5xl mb-4">🚀</div>
          <h2 id="modal-title" class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Join the Future
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Be among the first to experience Umbriel CMS. Enter your details and we'll send you an exclusive invite.
          </p>
        </div>

        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              bind:value={name}
              placeholder="Enter your full name"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              bind:value={email}
              placeholder="Enter your email address"
              class="w-full px-4 py-3 rounded-xl border transition-all
                {emailValidation.isValid || !email ? 
                  'border-gray-300 dark:border-gray-600 focus:ring-blue-500' : 
                  'border-red-300 dark:border-red-600 focus:ring-red-500'
                } 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:border-transparent"
              required
            />
            
            <!-- Email Validation Messages -->
            {#if email && !emailValidation.isValid}
              <div class="mt-2 text-sm text-red-600 dark:text-red-400">
                <p>{emailValidation.error}</p>
                {#if emailValidation.suggestion}
                  <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{emailValidation.suggestion}</p>
                {/if}
              </div>
            {/if}
          </div>

          <!-- Rate Limit Warning -->
          {#if $rateLimitStore.remainingAttempts <= 1 && $rateLimitStore.remainingAttempts > 0}
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-3">
              <p class="text-yellow-700 dark:text-yellow-400 text-sm">
                ⚠️ {$rateLimitStore.remainingAttempts} attempt remaining before temporary block
              </p>
            </div>
          {/if}

          <!-- Rate Limit Block -->
          {#if $rateLimitStore.blocked}
            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3">
              <p class="text-red-700 dark:text-red-400 text-sm">
                🚫 Too many attempts. Please wait {rateLimiter.formatTimeRemaining($rateLimitStore.remainingTime)} before trying again.
              </p>
            </div>
          {/if}

          <!-- Error Message -->
          {#if errorMessage}
            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3">
              <p class="text-red-700 dark:text-red-400 text-sm">{errorMessage}</p>
            </div>
          {/if}

          <!-- Actions -->
          <div class="flex space-x-3 pt-4">
            <button
              type="button"
              on:click={closeModal}
              class="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || !isFormValid}
              class="flex-1 px-6 py-3 transition-colors font-medium flex items-center justify-center rounded-xl
                {isFormValid && !isLoading ? 
                  'bg-blue-600 hover:bg-blue-700 text-white' : 
                  'bg-gray-400 cursor-not-allowed text-gray-200'
                }"
            >
              {#if isLoading}
                <svg class="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              {:else}
                Send Invite
              {/if}
            </button>
          </div>
        </form>

        <!-- Benefits -->
        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Early adopter pricing</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Exclusive beta access</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Direct feedback channel</span>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  /* Modal animation */
  .fixed {
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  /* Input focus styles */
  input:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
</style> 