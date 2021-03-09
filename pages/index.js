import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Benvenuto sul mio sito!" />
        <p className="description">
          Un giorno qui ci sarà la mia homepage. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
