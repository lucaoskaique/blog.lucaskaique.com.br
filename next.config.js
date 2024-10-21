// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/js/', destination: 'https://lucaskaique.com.br/' },
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
    return [
      {
        // redirect /loja to external url
        source: '/loja',
        destination: 'https://coice.sualojaonline.app',
        permanent: true
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true
    }
  }
}

module.exports = nextConfig
