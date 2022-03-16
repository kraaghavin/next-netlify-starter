import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>andamanEARTH</title>
        <link rel="icon" href="/Google_Earth_icon.svg-2" />
      </Head>

      <main>
        <Header title="Re-exploring the Andamans" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
