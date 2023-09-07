import { CampaignMetaData, CampaignType } from '@/types/types';
import { useAccount } from '@starknet-react/core'
import { useState,useEffect } from 'react' 
import { CID, create } from "ipfs-http-client";
import { CampaignProps } from '@/types/types';
import { IPFS_ENDPOINT, IPFS_GATEWAY } from '@/conf/conf';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Campaign({campaign} :CampaignProps) {

    const client = create({url:IPFS_ENDPOINT/*,headers:{Authorization:"Basic " + btoa("2S14oFNNjWXiHGVZLCDdGf4tqTJ:167cf50c1e7e2fc45acf5a18a5b2ac8e")}*/});

    const [meta,setMeta] = useState({title:'',desc:'',image:''})

    useEffect(  ()=>{

        const fetchIpfs = async () => {
            var res:CampaignMetaData = (await client.dag.get( CID.parse( campaign.url))).value;
            console.log(res)
            setMeta({title:res.title,desc:res.description,image:IPFS_GATEWAY+res.image.path})
        }
         fetchIpfs()
        
        
    },[])

    const router = useRouter()

    return(<Card style={{ width: '18rem' }} border='primary'>
        <Card.Img variant="top" src={meta.image} />
        <Card.Body>
    <Card.Title>{meta.title}</Card.Title>
    <Card.Text>{meta.desc}</Card.Text>
    <Button onClick={() => router.push({pathname:'/campaign/[id]',query:{id: campaign.id}})} variant="primary">Details</Button>
    </Card.Body>
  </Card>)
}