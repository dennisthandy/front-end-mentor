import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Heading from '../components/Heading';
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => (
  <div className="container">
    <Head>
      <title>My Front-End Mentor Challenges</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="block">
      <Heading label="This is Heading" />
    </main>

    <footer className="block">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className="block">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
);

export default Home;
