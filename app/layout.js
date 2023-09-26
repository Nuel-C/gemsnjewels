'use client'
import './globals.css'
import Script from 'next/script'
import Head from 'next/head';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Footer from './footer'








export default function RootLayout({ children }) {

  return (
    <Provider store={store}>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/<generated>"
            sizes="<generated>"
          />
          <link
            rel="apple-touch-icon"
            href="/favicon.ico"
            type="image/<generated>"
            sizes="<generated>"
          />     
        </Head>
        <body>
          {children}
          <Footer/>
        </body>
        <Script src="https://checkout.flutterwave.com/v3.js"/>
        <Script src="https://kit.fontawesome.com/77cfc6d17b.js" crossorigin="anonymous"/>
        <script src="//code.tidio.co/n2qwloju0ktxznzkethjdjaf8uvdnhmj.js" async></script>
      </html>
    </Provider>
  )
}
