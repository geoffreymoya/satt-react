import { IPFS_ENDPOINT, IPFS_GATEWAY } from "@/conf/conf";
import { CampaignDetailsProps, CampaignMetaData, CampaignProps } from "@/types/types";
import { useAccount } from "@starknet-react/core";
import { CID, create } from "ipfs-http-client";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Apply from "./Apply";
import MyCmpProms from "./MyCmpProms";

export default function CmpDetails({campaign,promlist} :CampaignDetailsProps) {
    const client = create({url:IPFS_ENDPOINT/*,headers:{Authorization:"Basic " + btoa("2S14oFNNjWXiHGVZLCDdGf4tqTJ:167cf50c1e7e2fc45acf5a18a5b2ac8e")}*/});

    const [meta,setMeta] = useState({title:'',desc:'',image:''})

    const [apply,setApply] = useState(false);

    useEffect(  ()=>{

        const fetchIpfs = async () => {
            var res:CampaignMetaData = (await client.dag.get( CID.parse( campaign.url))).value;
            console.log(res)
            setMeta({title:res.title,desc:res.description,image:IPFS_GATEWAY+res.image.path})
        }
         fetchIpfs()
      
         // taux
         // budget restant et crypto
         // debut fin consitionnel
         // RS 
         // liste participants
         // bouton participer
        
    },[])

    const { address } = useAccount()
   
    const addr = "0x0"+address?.replace(/^0x/i, '');

    const mine : Boolean = campaign.advertiser == addr;

    return(<>
        <h1>{meta.title}</h1>
        <p>{meta.desc}</p>
        {mine && <MyCmpProms promlist={promlist}></MyCmpProms>}
        {!mine && <Button onClick={() => {setApply(true)}} variant="primary">Apply</Button>}
        {apply && <Apply campaign={campaign}/>}

    </>)
}