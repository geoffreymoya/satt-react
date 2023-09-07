import { CampaignProps } from '@/types/types'
import { useAccount, useStarknet } from '@starknet-react/core'
import { useRouter } from 'next/router'
import { useState } from 'react' // apply params
import { Button, Form, Modal } from 'react-bootstrap'
import { CallData } from 'starknet'
export default function Apply({campaign}:CampaignProps) {

    const { library } = useStarknet()
    const { address,account } = useAccount()
    const router = useRouter()

    const [link,setLink] = useState('')
    const [linkError,setLinkError] = useState(false)

    const [show,setShow] = useState(false)

    const postApply = (e: React.FormEvent<HTMLFormElement>) => {

        const parseLink = (lnk:string) => { 
        return  { idUser:lnk,idPost:lnk }
        }

        const {idUser,idPost} = parseLink(link)

        const applyTx =  async () => {

            const txApply  = {
                contractAddress:campaign.id,
                entrypoint:"apply",
                calldata:CallData.compile({
                    idUser,
                    idPost
                })}

            const tx = await account?.execute([txApply]);
            await library.waitForTransaction(tx?.transaction_hash);
            setShow(true);
            
        }
        applyTx()

    }

    const handleClose = () => {
        setShow(false);
        router.push({pathname:'/'})
    }


    

    const linkChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value)
        setLinkError( e.target.value == "")
       
    }

    return(<>
    <Form onSubmit={postApply}>
    <Form.Group className="mb-3">
    <Form.Label>Link</Form.Label>
    <Form.Control id='title' name='title' type='text' onChange={linkChange} value={link} />
    </Form.Group>
    <Button type='submit'>Apply</Button>
    </Form>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tx confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Link successfully submitted</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}