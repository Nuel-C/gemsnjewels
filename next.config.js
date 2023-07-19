/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/adminlogin',
            destination: 'http://dappartgalleries.com/adminlogin',
          },
          {
            source: '/upload',
            destination: 'http://dappartgalleries.com/upload',
          },
          {
            source: '/getAllUploads',
            destination: 'http://dappartgalleries.com/getAllUploads',
          },
          {
            source: '/getByCategory',
            destination: 'http://dappartgalleries.com/getByCategory',
          },
          {
            source: '/deleteProduct',
            destination: 'http://dappartgalleries.com/deleteProduct',
          },
          {
            source: '/register',
            destination: 'http://dappartgalleries.com/register',
          },
          {
            source: '/search',
            destination: 'http://dappartgalleries.com/search',
          },
          {
            source: '/getUserCartItems',
            destination: 'http://dappartgalleries.com/getUserCartItems',
          },
          {
            source: '/addToCart',
            destination: 'http://dappartgalleries.com/addToCart',
          },
          {
            source: '/deleteCartItem',
            destination: 'http://dappartgalleries.com/deleteCartItem',
          },
          {
            source: '/userlogin',
            destination: 'http://dappartgalleries.com/userlogin',
          },
          {
            source: '/createOrder',
            destination: 'http://dappartgalleries.com/createOrder',
          },
          {
            source: '/getUserOrders',
            destination: 'http://dappartgalleries.com/getUserOrders',
          },
          {
            source: '/getAllOrders',
            destination: 'http://dappartgalleries.com/getAllOrders',
          },
          {
            source: '/updateOrderStatus',
            destination: 'http://dappartgalleries.com/updateOrderStatus',
          },
          {
            source: '/searchOrderId',
            destination: 'http://dappartgalleries.com/searchOrderId',
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
