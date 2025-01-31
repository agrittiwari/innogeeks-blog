import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Nav from '../Components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>goodTechContent</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
      </Head>
      <Nav/>
      <Component {...pageProps} />
      </>)
}

export default MyApp
