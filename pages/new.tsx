import Head from "next/head"
import CampaignForm from "@/components/CampaignForm"
import { useAccount } from "@starknet-react/core"
import WalletBar from "@/components/WalletBar"
export default function New() {
    
    return (
        <>
        <Head>
        <title>Satt Starknet - New Campaign</title>
        <meta name="description" content="Satt on Stark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        <WalletBar/>
        <CampaignForm/>
        
    </main>
   </>
    )
}