import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Secondary } from '../components/Secondary';
import { Swap } from '../components/Swap';

const Home: NextPage = () => {
  return (
    <div className="bg-[#252525]">
      <Head>
        <title>The Ledge</title>
        <meta name="description" content="The Ledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#252525]">
        <Navbar />
        <Hero />
        <Secondary />
        <Swap />
      </main>

      <footer className="">
      </footer>
    </div>
  )
}

export default Home
