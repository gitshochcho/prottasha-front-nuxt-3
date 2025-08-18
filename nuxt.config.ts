import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                primary: {
                    50: '{sky.50}',
                    100: '{sky.100}',
                    200: '{sky.200}',
                    300: '{sky.300}',
                    400: '{sky.400}',
                    500: '{sky.500}',
                    600: '{sky.600}',
                    700: '{sky.700}',
                    800: '{sky.800}',
                    900: '{sky.900}',
                    950: '{sky.950}'
                },
            },
            dark: {
                primary: {
                    50: '{sky.50}',
                    100: '{sky.100}',
                    200: '{sky.200}',
                    300: '{sky.300}',
                    400: '{sky.400}',
                    500: '{sky.500}',
                    600: '{sky.600}',
                    700: '{sky.700}',
                    800: '{sky.800}',
                    900: '{sky.900}',
                    950: '{sky.950}'
                }
            }
        }
    },
});

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
            API_URL_ADMIN: process.env.API_URL_ADMIN,
            API_URL_CITIZEN: process.env.API_URL_CITIZEN,
            SCRIPT_URL: process.env.SCRIPT_URL,
            CMS_EMAIL: process.env.CMS_EMAIL,
            CMS_PASSWORD: process.env.CMS_PASSWORD,
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
            FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
            FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
            FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
            FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
            FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
            STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
            PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
        }
    },
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    css: [
        '~/assets/css/main.css',
        '~/assets/fa-6.4.0/css/all.css',
        'primeicons/primeicons.css',
        '~/assets/scss/style.scss'
    ],
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/icon',
      '@nuxtjs/color-mode',
      "@nuxt/image-edge",
      "nuxt-marquee",
      '@primevue/nuxt-module',
      '@unlok-co/nuxt-stripe',
      'nuxt-paypal',
      '@nuxtjs/sitemap',
      '@vite-pwa/nuxt',
      '@nuxt/image'
    ],
    image: {
        provider: process.env.NODE_ENV === 'development' ? 'none' : 'ipx'
    },
   
    primevue: {
        options: {
            theme: {
                preset: MyPreset,
                options: {
                    prefix: 'p',
                    darkModeSelector: false || 'html.dark',
                    cssLayer: false
                }
            }
        }
    },
    
    plugins: [
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
            ],
        }
    },
    colorMode: {
        preference: 'light',
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },
    pwa: {
        manifest: {
            name: 'Prottasha',
            short_name: 'Prottasha',
            description: 'Donation Management',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone',
            orientation: 'portrait',
            start_url: '/',
            scope: '/',
            icons: [
                {
                    src: '/favicon.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: '/favicon.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        },
        workbox: {
            navigateFallback: '/',
            runtimeCaching: [
                {
                    urlPattern: ({ url }) => url.origin === self.location.origin,
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api-cache',
                        networkTimeoutSeconds: 10,
                        expiration: {
                            maxEntries: 100,
                            maxAgeSeconds: 60 * 60 * 24 // 24 hours
                        },
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                },
            ]
        },
        registerType: 'autoUpdate',
        strategies: 'generateSW',
        injectRegister: 'auto',
        devOptions: {
            enabled: false
        }
    },
    routeRules: {
        '/': { prerender: true },
        '/about': { static: true },
        '/compliance': { static: true },
        '/contact': { static: true },
        '/faq': { static: true },
        '/features': { static: true },
        '/history': { static: true },
        '/payment': { static: true },
        '/pricing': { static: true },
        '/privacy-policy': { static: true },
        '/terms-of-service': { static: true },
        '/blogs/**': { static: true },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    devServer: {
        host: '0.0.0.0',
        port: 3001
    },
})