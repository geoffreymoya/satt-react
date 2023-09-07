import { PromListProps } from '@/types/types'
import { useAccount } from '@starknet-react/core'
import { useState } from 'react' 
import Prom from './Prom'
export default function MyProms({promlist}:PromListProps) {

    return ( <>
        {promlist.map((prom,i) => <Prom key={i} prom={prom}></Prom>)}
        </>
    )

}