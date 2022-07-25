import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="bg-[#252525]">
      <Head>
        <title>The Ledge</title>
        <meta name="description" content="The Ledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#252525]">
        {/* Navbar */}
        <Navbar />
      </main>

      <footer className="">
      </footer>
    </div>
  )
}

export default Home
