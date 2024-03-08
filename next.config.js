module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }

    return config
  },
  async rewrites() {
    return [
      { source: '/js/', destination: 'https://lucaskaique.com.br/' },
      { source: '/loja/', destination: 'https://coice.sualojaonline.app' },
      { source: '/jekyll/', destination: 'https://lucaskaique.com.br/' },
      { source: '/svg/', destination: 'https://lucaskaique.com.br/' },
      { source: '/dev/', destination: 'https://lucaskaique.com.br/' },
      { source: '/tags/', destination: 'https://lucaskaique.com.br/' },
      {
        source: '/making-of-blog-novo/',
        destination: 'https://lucaskaique.com.br/'
      },
      { source: '/page/:slug*', destination: 'https://lucaskaique.com.br/' }
    ]
  },
  async redirects() {
    return []
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'avatars.githubusercontent.com',
      'res.cloudinary.com'
    ]
  }
}
