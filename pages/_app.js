import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>PMGates </title>
        <meta name="PMGates" content="Purpose Made Gates"/>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>

  )
}
