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
    <div id="myCarousel" class="carousel container slide">
<div class="carousel-inner">
        <div class="active item one"></div>
        <div class="item two"></div>
        <div class="item three"></div>
</div>
</div>
        <Header title="Re-exploring the Andamans" />
        <p className="description">
        </p>
      </main>

      <Footer />
    </div>
  )
}
