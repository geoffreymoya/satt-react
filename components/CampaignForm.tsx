import {  APPROVE_ABI, CMP_FACTORY, CMP_FACTORY_ABI, CMP_HASH,  IPFS_ENDPOINT,  SATT_TOKEN } from '@/conf/conf';
import { useAccount, useStarknet } from '@starknet-react/core'
import {useBalance} from '@starknet-react/core' 
import { CID, create } from "ipfs-http-client";
import { Button,Form, Modal } from 'react-bootstrap';

import { ChangeEvent, MouseEventHandler, useState } from 'react' // campaign draft
import DatePicker from 'react-datepicker'
import Dropdown from 'react-dropdown';

import {hash,Contract, CallData, Call} from 'starknet'

import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";

const tokens = [
    { value: SATT_TOKEN, label: 'SATT' },
    { value: '0x2', label: 'ETH' },
    { value: '0x3', label: 'USDC' },
    { value: '0x4', label: 'DAI' },
  ];

  const Sns = [
    { value: '0x1', label: 'Twitter' },
    { value: '0x2', label: 'Facebook' },
    { value: '0x3', label: 'Instagram' },
    { value: '0x4', label: 'Youtube' },
  ];
  const defaultSn = Sns[0];

  const client = create({url:IPFS_ENDPOINT});

  function asciiToHex(str:string) {
    let arr1 = ['0x']
    for (var n = 0; n < str.length; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16)
        arr1.push(hex)
    }
    return arr1.join('')
}



export default function CampaignForm() {

    const { library } = useStarknet()
    const { address,account } = useAccount()
   

   

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState<File>();
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [token,setToken] = useState(tokens[0]);
    const [amount, setAmount] = useState(0);
    const [sn,setSn] = useState(defaultSn)

    const [viewRatio, setViewRatio] = useState(0);
    const [likeRatio, setLikeRatio] = useState(0);
    const [shareRatio, setShareRatio] = useState(0);

    const  [isTitlerror,setTitleError] = useState(false)
    const [isDescerror,setDescError] = useState(false)
    const [isStartError,setStartError] = useState(false)
    const [isEndError,setEnderror] = useState(false)
    const [isAmounterror,setAmountError] = useState(false)
    const [isRatioerror,setRatioError] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    const titleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        setTitleError( e.target.value == "")
       
    }

    const descChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(e.target.value)
        setDescError( e.target.value == "")
        
    }

    const  retrieveFile = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const data = e.target.files && e.target.files[0];
        
        const reader = new window.FileReader();
        if(data) {
          
            setFile(data)
    
        }
        
        e.preventDefault(); 
    }
    
    const startChange = (date:any) => {
        setStart(date)
      /*  var minStart = new Date()
        minStart.setTime(new Date().getTime() + 3600)
        setStartError(start <= minStart)*/
       
    }
    
    const endChange =  (date:any) => {
        setEnd(date)
        //setEnderror(start >= end)
       
    }
    
   
    
    const onTokenSelect = (option:any) => {
        setToken(option)
    }

    const amountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt( e.target.value))
        setAmountError(parseInt(e.target.value) == 0)
       
    }
    
    const onSnSelect = (option:any) => {
        setSn(option)
    }

    const viewChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setViewRatio(parseInt( e.target.value))
        setRatioError(parseInt(e.target.value) == 0 && likeRatio == 0 && shareRatio == 0 )
       
    }
    const likeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLikeRatio(parseInt( e.target.value))
        setRatioError(parseInt(e.target.value) == 0 && viewRatio == 0 && shareRatio == 0 )
       
    }
    const shareChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setShareRatio(parseInt( e.target.value))
        setRatioError(parseInt(e.target.value) == 0 && viewRatio == 0 && likeRatio == 0 )
        
    }
    
    const postCampaign = (e: React.FormEvent<HTMLFormElement>) => {

        console.log('1')
        e.preventDefault()
        if(isTitlerror || isDescerror || isStartError || isEndError || isAmounterror || isRatioerror)
        return
        console.log('2')
        //amount *10 18

        var minStart = new Date()
        minStart.setTime(new Date().getTime() + 3600)

        console.log(start, minStart)

        if(title == '' || desc =='' || !file  || start < minStart || start >= end || amount == 0 || (viewRatio == 0 && likeRatio == 0 && likeRatio == 0 ) )
        return

        console.log('3')
       
        const createCampaign = async () => {
            const filecid = await client.add(file);
            var meta = {
                title:title,
                desc:desc,
                image:filecid
            }
           
            const url = await client.dag.put(meta);
            const urlstr = url.toString()
            const urllow = urlstr.slice(-31)
            const urlhigh = urlstr.slice(0,urlstr.length-31)
           
            const contractConstructor = CallData.compile({
                url_first: asciiToHex(urlhigh),
                url_last: asciiToHex(urllow),
                startDate:start.getTime(),
                endDate:end.getTime(),
                amount:{low:amount,high:0},
                token:token.value,
                idSn:sn.value,
                viewRatio:viewRatio,
                likeRatio:likeRatio,
                shareRatio:shareRatio
            });
            
            
            
            
            if(!address || !account)
                return
            var cmp_id = hash.calculateContractAddressFromHash(0,CMP_HASH,contractConstructor,CMP_FACTORY);
           
            const TxApprove  = {
                contractAddress:token.value,
                entrypoint:"approve",
                calldata:CallData.compile({
                    spender:cmp_id,
                    amount:{low: amount, high: 0}
                })}
            const TxCreate = {
                contractAddress:CMP_FACTORY,
                entrypoint:"createCampaign",
                calldata:contractConstructor
            }
          
            const multiCall = await account.execute([TxApprove,TxCreate])
            await library.waitForTransaction(multiCall.transaction_hash);

            setShow(true)

          
          
        }
        createCampaign()

    }

    const { data, isLoading, error, refetch } = useBalance ({
        address,token:token.value
      })


    
   
    return (<><Form onSubmit={postCampaign}>
    <Form.Group className="mb-3">
    <Form.Label>Title</Form.Label>
    <Form.Control id='title' name='title' type='text' onChange={titleChange} value={title} />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" id='desc' name='desc' onChange={descChange} value={desc} />
    {isDescerror && <div>Desciption is empty</div>}
    </Form.Group>

    <Form.Group className="mb-3">
    {isTitlerror && <div>Title is empty</div>}
    <Form.Label>Image</Form.Label>
    <input id='image' type="file" name="data" onChange={retrieveFile} />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Start</Form.Label>
    <DatePicker id='start' onChange={startChange} selected={start} ></DatePicker>
    {isStartError && <div>Start Date is too early {start.toDateString()} </div>}
    <Form.Label>End</Form.Label>
    <DatePicker id='end' onChange={endChange} selected={end} ></DatePicker>
    {isEndError&& <div>End Date is too early {end.toDateString()}</div>}
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Token</Form.Label>
    <Dropdown  options={tokens} onChange={onTokenSelect} value={token} placeholder="Select a token" />
    <Form.Label>Amount</Form.Label>
    <Form.Control id='amount' name='amount' min='0' max={data?.formatted} type='number' onChange={amountChange} value={amount} />
    {isAmounterror && <div>Amount error</div>}
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Social Network</Form.Label>
    <Dropdown options={Sns} onChange={onSnSelect} value={sn} placeholder="Select Social Network" />
    <Form.Label>View Ratio</Form.Label>
    <Form.Control id='viewratio' name='viewratio' min='0' type='number' onChange={viewChange} value={viewRatio}/>
    <Form.Label>Like Ratio</Form.Label>
    <Form.Control id='likeratio' name='likeratio' min='0'  type='number' onChange={likeChange} value={likeRatio} />
    <Form.Label>Share Ratio</Form.Label>
    <Form.Control id='shareratio' name='shareratio' min='0'  type='number' onChange={shareChange} value={shareRatio} />
    {isRatioerror && <div>all ratios empty</div>}
    </Form.Group>

    <Button type='submit' >Create</Button>
    
    </Form>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tx confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Campaign successfully created</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}