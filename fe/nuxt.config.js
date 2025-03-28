// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      spotifyRedirectUri: process.env.SPOTIFY_REDIRECT_URI,
    },
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  },

  // modules: [ '@nuxtjs/auth-next', 'cookie-universal-nuxt'],
  buildModules: ['@nuxtjs/tailwindcss'],

  auth: {
    strategies: {
      spotify: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.spotify.com/authorize',
          token: 'https://accounts.spotify.com/api/token',
          userInfo: 'https://api.spotify.com/v1/me',
        },
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        responseType: 'token',
        grantType: 'authorization_code',
        scope: 'user-read-private user-read-email',
      },
    },
  },

  compatibilityDate: '2025-03-28',
})