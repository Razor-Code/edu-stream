import Head from 'next/head'
import { Inter } from '@next/font/google'
import { DemoForm } from 'components/forms/demo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Edu-Stream</title>
        <meta name="description" content="Student Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DemoForm/>
      </main>
    </>
  )
}
