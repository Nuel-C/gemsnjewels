/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/adminlogin',
            destination: 'http://localhost:5000/adminlogin',
          },
          {
            source: '/upload',
            destination: 'http://localhost:5000/upload',
          },
          {
            source: '/getAllUploads',
            destination: 'http://localhost:5000/getAllUploads',
          },
          {
            source: '/getByCategory',
            destination: 'http://localhost:5000/getByCategory',
          },
        ]
      },
      images: {
        domains: [
          'localhost',
        ],
      },
}

module.exports = nextConfig
