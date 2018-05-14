
module.exports = {
  meta: {
    twitter: '@vianhanif',
    title: {
      default: 'SSR Web App',
      separator: ' | '
    },
    description: 'Here is a pretty awesome meta tag description for my website.',
    image: '/images/logo.svg'
  },
  url: {
    default: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://sample-isomorphic-react.herokuapp.com'
  },
  // Enable or disable server-side rendering
  enableSSR: true,

  // Enable or disable dynamic imports (code splitting)
  enableDynamicImports: false,

  // The env vars to expose on the client side. If you add them here, they will
  // be available on the client as process.env[VAR_NAME], same as they would be
  // in node.js.
  //
  // **WARNING**: Be careful not to expose any secrets here!
  clientEnvVars: [
    'NODE_ENV',
    'APPLICATION_BASE_URL'
  ],

  /* The identifier to use for css-modules.
   */
  cssModulesIdentifier: '[name]__[local]__[hash:base64:5]',

  // Isomorphic configuration
  isomorphicConfig: {
    assets: {
      images: {
        extensions: [
          'png',
          'jpg',
          'jpeg',
          'gif',
          'ico',
          'svg'
        ]
      }
    }
  }
};
