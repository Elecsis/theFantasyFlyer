/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '**',
          },
          {
            protocol: 'http',
            hostname: 'cdn.usatsimg.com',
            pathname: '**',
          },
        ],
      },
}


module.exports = nextConfig

