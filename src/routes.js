// Environment-aware URL configuration
const isDevelopment = import.meta.env.MODE === 'development';

const BASE_URLS = {
  development: {
    frontend: 'https://local.umbrielcms.com.br:3002',
    api: 'https://local.api.umbrielcms.com.br:3001',
    preview: 'http://localhost:3002'
  },
  production: {
    frontend: 'https://admin.umbrielcms.com.br',
    api: 'https://api.cms.umbrielcms.com.br',
    preview: 'https://admin.umbrielcms.com.br'
  }
};

const currentUrls = isDevelopment ? BASE_URLS.development : BASE_URLS.production;

// Available preview routes for the 30-minute trial
export const availablePreviewRoutes = [
  '/new-publication',
  '/video-hero-template', 
  '/image-hero-template',
  '/analytics',
  '/client-theme',
  '/flex-block-builder',
  '/authors'
];

export const routes = {
  // Landing page anchors (for current page navigation)
  getStarted: `${currentUrls.frontend}/signup`,
  requestDemo: `${currentUrls.frontend}/demo`,
  
  // CMS app routes
  signup: `${currentUrls.frontend}/signup`,
  login: `${currentUrls.frontend}/login`,
  dashboard: `${currentUrls.frontend}/dashboard`,
  demo: `${currentUrls.frontend}/demo`,
  
  // Preview routes
  interactivePreview: `${currentUrls.preview}/preview/demo/dashboard`,
  
  // Legal pages
  privacyPolicy: '#footer',
  termsOfService: '#footer',
  contact: '#footer'
};

/**
 * Helper function to open URLs in new tab
 * @param {string} url - The URL to open
 */
export function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
} 