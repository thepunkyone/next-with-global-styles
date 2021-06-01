import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/molecules/Card'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Card
            url="https://nextjs.org/docs"
            heading="Documentation &rarr;"
            description="Find in-depth information about Next.js features and API."
          />

          <Card
            url="https://nextjs.org/learn"
            heading="Learn &rarr;"
            description="Learn about Next.js in an interactive course with quizzes!"
          />

          <Card
            url="https://github.com/vercel/next.js/tree/master/examples"
            heading="Examples &rarr;"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <Card
            url="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            heading="Deploy &rarr;"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
