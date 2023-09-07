import { PromListProps } from '@/types/types'
import { useAccount } from '@starknet-react/core'
import { useState } from 'react' 
import CmpProm from './CmpProm'
export default function MyCmpProms({promlist} : PromListProps) {

    
    return ( <>
        {promlist.map((prom,i) => <CmpProm key={i} prom={prom}></CmpProm>)}
        </>
    )
    
}