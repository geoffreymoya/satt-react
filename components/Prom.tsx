import { PromProps } from '@/types/types'
import { useAccount } from '@starknet-react/core'
import { useState } from 'react' 
import { Button, Card } from 'react-bootstrap'
export default function Prom({prom}:PromProps) {

    // accepté
    // lien ver cmp
    // rs
    //lien vers post
    // amounr and pay
    // results

   

    const paycondition :boolean = prom.status == 1 && prom.pendingAmount > 0
return(<Card style={{ width: '18rem' }} border='primary'>

<Card.Body>
<Card.Title>{prom.id}</Card.Title>
<Card.Text>{prom.idUser} {prom.idPost}</Card.Text>
<Button>Details</Button>
<Button>Link</Button>
{ paycondition && <Button>Pay</Button>}
</Card.Body>
</Card>)
}