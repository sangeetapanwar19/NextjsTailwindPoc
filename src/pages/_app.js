//import '@/styles/globals.css'
//import '@/styles/index.scss'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps };
// };
