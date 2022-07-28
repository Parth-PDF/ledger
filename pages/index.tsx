import type { NextPage } from "next";
import Head from "next/head";
import { CreatorViewer } from "../components/CreatorViewer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Partners } from "../components/Partners";
import { RoadMap } from "../components/RoadMap";
import { Who } from "../components/Who";
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
        <Who />
        <CreatorViewer />
        <RoadMap />
        <Partners />
        <WhereWereGoing />
        <FAQ />
        <Featured />
        <JoinCommunity />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
