import type { NextPage } from 'next';
import Head from 'next/head';
import { Grid } from '../components/Grid';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Secondary } from '../components/Secondary';
import { Swap } from '../components/Swap';
import { Footer } from '../components/Footer';
import { JoinCommunity } from '../components/JoinCommunity';
import { Featured } from '../components/Featured';
import { FAQ } from '../components/FAQ';
import { WhereWereGoing } from '../components/WhereWereGoing';

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
        <Grid />
        <WhereWereGoing />
        <FAQ />
        <Featured />
        <JoinCommunity />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  )
}

export default Home
