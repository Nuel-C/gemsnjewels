/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/adminlogin',
            destination: 'https://dappartgalleries.com/adminlogin',
          },
          {
            source: '/upload',
            destination: 'https://dappartgalleries.com/upload',
          },
          {
            source: '/getAllUploads',
            destination: 'https://dappartgalleries.com/getAllUploads',
          },
          {
            source: '/getByCategory',
            destination: 'https://dappartgalleries.com/getByCategory',
          },
          {
            source: '/deleteProduct',
            destination: 'https://dappartgalleries.com/deleteProduct',
          },
          {
            source: '/register',
            destination: 'https://dappartgalleries.com/register',
          },
          {
            source: '/search',
            destination: 'https://dappartgalleries.com/search',
          },
          {
            source: '/getUserCartItems',
            destination: 'https://dappartgalleries.com/getUserCartItems',
          },
          {
            source: '/addToCart',
            destination: 'https://dappartgalleries.com/addToCart',
          },
          {
            source: '/deleteCartItem',
            destination: 'https://dappartgalleries.com/deleteCartItem',
          },
          {
            source: '/userlogin',
            destination: 'https://dappartgalleries.com/userlogin',
          },
          {
            source: '/createOrder',
            destination: 'https://dappartgalleries.com/createOrder',
          },
          {
            source: '/getUserOrders',
            destination: 'https://dappartgalleries.com/getUserOrders',
          },
          {
            source: '/getAllOrders',
            destination: 'https://dappartgalleries.com/getAllOrders',
          },
          {
            source: '/updateOrderStatus',
            destination: 'https://dappartgalleries.com/updateOrderStatus',
          },
          {
            source: '/searchOrderId',
            destination: 'https://dappartgalleries.com/searchOrderId',
          },
        ]
      },
      images: {
        domains: [
          'localhost',
          'dappartgalleries.com'
        ],
      },
}

module.exports = nextConfig
