import { PromProps } from "@/types/types";
import { Button, Card } from "react-bootstrap";

export default function CmpProm({prom}:PromProps) {
   // accepté
    // lien ver cmp
    // rs
    //lien vers post
    // amounr and pay
    // results
return(<Card style={{ width: '18rem' }} border='primary'>

<Card.Body>
<Card.Title>{prom.id}</Card.Title>
<Card.Text>{prom.idUser} {prom.idPost}</Card.Text>
{prom.status == 0 &&<>
<Button>Accept</Button>
<Button>Reject</Button></>}
</Card.Body>
</Card>)
}