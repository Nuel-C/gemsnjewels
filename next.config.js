/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/adminlogin',
            destination: 'https://citesbnknewyork.com/adminlogin',
          },
          {
            source: '/upload',
            destination: 'https://citesbnknewyork.com/upload',
          },
          {
            source: '/getAllUploads',
            destination: 'https://citesbnknewyork.com/getAllUploads',
          },
          {
            source: '/getByCategory',
            destination: 'https://citesbnknewyork.com/getByCategory',
          },
          {
            source: '/deleteProduct',
            destination: 'https://citesbnknewyork.com/deleteProduct',
          },
          {
            source: '/register',
            destination: 'https://citesbnknewyork.com/register',
          },
          {
            source: '/search',
            destination: 'https://citesbnknewyork.com/search',
          },
          {
            source: '/getUserCartItems',
            destination: 'https://citesbnknewyork.com/getUserCartItems',
          },
          {
            source: '/addToCart',
            destination: 'https://citesbnknewyork.com/addToCart',
          },
          {
            source: '/deleteCartItem',
            destination: 'https://citesbnknewyork.com/deleteCartItem',
          },
          {
            source: '/userlogin',
            destination: 'https://citesbnknewyork.com/userlogin',
          },
          {
            source: '/createOrder',
            destination: 'https://citesbnknewyork.com/createOrder',
          },
          {
            source: '/getUserOrders',
            destination: 'https://citesbnknewyork.com/getUserOrders',
          },
          {
            source: '/getAllOrders',
            destination: 'https://citesbnknewyork.com/getAllOrders',
          },
          {
            source: '/updateOrderStatus',
            destination: 'https://citesbnknewyork.com/updateOrderStatus',
          },
          {
            source: '/searchOrderId',
            destination: 'https://citesbnknewyork.com/searchOrderId',
          },
          {
            source: '/getRegularUploads',
            destination: 'https://citesbnknewyork.com/getRegularUploads',
          },
          {
            source: '/getCustomUploads',
            destination: 'https://citesbnknewyork.com/getCustomUploads',
          },
        ]
      },
      // images: {
      //   domains: [
      //     'localhost',
      //     'dappartgalleries.com'
      //   ],
      // },
}

module.exports = nextConfig
