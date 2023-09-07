import Head from "next/head"

import WalletBar from "@/components/WalletBar"

import CmpDetails from "@/components/CmpDetails"
import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client';
import { CampaignGraphType, PromType } from "@/types/types"
export default function Details() {
    const router = useRouter()
    const id = router.query.id;

    const dashQuery = gql`
        {
            campaign(id:"${id}") {
                id
                advertiser
                typeSn
                url
                startDate
                endDate
                typeSn
                token
                funds
                totalFunds
                viewRatio
                likeRatio
                shareRatio
            }
            proms(input:{campaign_id:"${id}"}) {
                id
                influencer
                idPost
                idUser
                amount
                pendingAmount
                status
            }
        }`
        const { loading, error, data } = useQuery(dashQuery);
    
        if (loading) return <p>Loading...</p>;
    
        if (error) return <p>Error : {error.message}</p>;

        const graphcmp : CampaignGraphType  = data.campaign;

        const proms : PromType [] = data.proms;

    return (
        <>
        <Head>
        <title>Satt Starknet - Campaign</title>
        <meta name="description" content="Satt on Stark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        <WalletBar/>
        <CmpDetails campaign={graphcmp} promlist={proms}/>
        
    </main>
   </>
    )
}