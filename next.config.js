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
          {
            source: '/deleteProduct',
            destination: 'http://localhost:5000/deleteProduct',
          },
          {
            source: '/register',
            destination: 'http://localhost:5000/register',
          },
          {
            source: '/search',
            destination: 'http://localhost:5000/search',
          },
          {
            source: '/getUserCartItems',
            destination: 'http://localhost:5000/getUserCartItems',
          },
          {
            source: '/addToCart',
            destination: 'http://localhost:5000/addToCart',
          },
          {
            source: '/deleteCartItem',
            destination: 'http://localhost:5000/deleteCartItem',
          },
          {
            source: '/userlogin',
            destination: 'http://localhost:5000/userlogin',
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
