import { PromListProps } from '@/types/types'
import { useAccount } from '@starknet-react/core'
import { useState } from 'react' 
import Prom from './Prom'
export default function MyCmpProms({promlist} : PromListProps) {

    
        return (<>
            {promlist.map(prom => <Prom key={''} prom={prom}></Prom>)}
        </>)
    
}