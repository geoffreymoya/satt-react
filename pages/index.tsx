import Head from 'next/head'
//import { useBlock } from '@starknet-react/core'
import WalletBar from '../components/WalletBar'
import DashBoard from '../components/DashBoard'

export default function Home() {
 
  return (
    <>
      <Head>
        <title>Satt Starknet</title>
        <meta name="description" content="Satt on Stark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WalletBar />
        <DashBoard></DashBoard>
      </main>
    </>
  )
}
