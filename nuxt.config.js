export default {
  server: {
    port: 8001,
    host: '0.0.0.0',
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://52.79.253.30:5002',
  },
  // Loading Progress Bar custom https://vue-nuxt.gitbook.io/nuxt/configuration/loading
  loading: {
    color: '#7db8f9',
    height: '4px',
    failedColor: '#d43c6d',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Frame-Frontend-Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~assets/styles/main.scss', lang: 'scss' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/persistedState.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      });
    },
  },
  router: {
    middleware: 'authentication',
  },
};
