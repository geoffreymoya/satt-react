import { useAccount } from '@starknet-react/core'
import { useState } from 'react' 
import { CampaignListProps } from '@/types/types'
import Campaign from './Campaign'
import { CardGroup } from 'react-bootstrap'


export default function MyCampaigns({campaignlist}:CampaignListProps) {
    return ( <>
        {campaignlist.map((campaign,i) => <Campaign key={i} campaign={campaign}></Campaign>)}
        </>
    )
}