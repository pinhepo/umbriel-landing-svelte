import { writable } from 'svelte/store';
import { browser } from '$app/environment';

interface RateLimitData {
  attempts: number;
  lastAttempt: number;
  blockedUntil?: number;
}

const RATE_LIMIT_KEY = 'umbriel_invite_rate_limit';
const MAX_ATTEMPTS = 3; // Máximo 3 tentativas
const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutos de bloqueio
const RESET_WINDOW = 60 * 1000; // Resetar contador a cada 1 minuto

class RateLimiter {
  private data: RateLimitData = {
    attempts: 0,
    lastAttempt: 0
  };

  constructor() {
    if (browser) {
      this.loadFromStorage();
    }
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      if (stored) {
        this.data = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load rate limit data:', error);
      this.resetData();
    }
  }

  private saveToStorage() {
    if (browser) {
      try {
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(this.data));
      } catch (error) {
        console.warn('Failed to save rate limit data:', error);
      }
    }
  }

  private resetData() {
    this.data = {
      attempts: 0,
      lastAttempt: 0
    };
    this.saveToStorage();
  }

  isBlocked(): { blocked: boolean; remainingTime?: number } {
    const now = Date.now();

    // Se há um bloqueio ativo
    if (this.data.blockedUntil && now < this.data.blockedUntil) {
      return {
        blocked: true,
        remainingTime: this.data.blockedUntil - now
      };
    }

    // Se passou do tempo de bloqueio, resetar
    if (this.data.blockedUntil && now >= this.data.blockedUntil) {
      this.resetData();
      return { blocked: false };
    }

    // Se passou da janela de reset, resetar contador
    if (now - this.data.lastAttempt > RESET_WINDOW) {
      this.resetData();
    }

    return { blocked: false };
  }

  recordAttempt(): { blocked: boolean; remainingTime?: number } {
    const now = Date.now();

    // Verificar se já está bloqueado
    const blockStatus = this.isBlocked();
    if (blockStatus.blocked) {
      return blockStatus;
    }

    // Incrementar tentativas
    this.data.attempts += 1;
    this.data.lastAttempt = now;

    // Se excedeu tentativas, bloquear
    if (this.data.attempts >= MAX_ATTEMPTS) {
      this.data.blockedUntil = now + BLOCK_DURATION;
      this.saveToStorage();
      return {
        blocked: true,
        remainingTime: BLOCK_DURATION
      };
    }

    this.saveToStorage();
    return { blocked: false };
  }

  getRemainingAttempts(): number {
    const blockStatus = this.isBlocked();
    if (blockStatus.blocked) {
      return 0;
    }
    return MAX_ATTEMPTS - this.data.attempts;
  }

  formatTimeRemaining(milliseconds: number): string {
    const minutes = Math.ceil(milliseconds / (60 * 1000));
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }
}

export const rateLimiter = new RateLimiter();

// Store para UI reativa
export const rateLimitStore = writable({
  blocked: false,
  remainingTime: 0,
  remainingAttempts: MAX_ATTEMPTS
});

// Função para atualizar store
export function updateRateLimitStore() {
  const blockStatus = rateLimiter.isBlocked();
  rateLimitStore.set({
    blocked: blockStatus.blocked,
    remainingTime: blockStatus.remainingTime || 0,
    remainingAttempts: rateLimiter.getRemainingAttempts()
  });
} 