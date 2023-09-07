import { useAccount } from '@starknet-react/core'
import { useState,useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';
import MyCampaigns from './MyCampaigns';
import { create } from "ipfs-http-client";
import { CampaignGraphType } from '@/types/types';
import Link from 'next/link';
import MyProms from './MyProms';
import { PromType } from '@/types/types';

export default function DashBoard() {


  
    
    const { address } = useAccount()
   
    const addr = address?.replace(/^0x/i, '');
   

    const dashQuery = gql`
    {
        campaigns(input:{advertiser:"0x0${addr}"}) {
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
        proms(input:{influencer:"0x0${addr}"}) {
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

   

    const graphcmp : CampaignGraphType [] = data.campaigns;

    const proms : PromType [] = data.proms;
    
    

   
        
    


    return (
    <>
        <Link href="/new">New Campaign</Link>
        <MyCampaigns campaignlist={graphcmp} ></MyCampaigns>
        <MyProms promlist={proms}></MyProms>
        </>
    
    )
}