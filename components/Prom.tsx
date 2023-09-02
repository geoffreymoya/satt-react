import { PromProps } from '@/types/types'
import { useAccount } from '@starknet-react/core'
import { useState } from 'react' 
export default function Prom({prom}:PromProps) {
return(<div>{prom.id}</div>)
}