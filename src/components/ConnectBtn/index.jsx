import React,{useState,useCallback,useEffect} from 'react'
import { Button } from '../input'
import { useRecoilState } from 'recoil'
import detectEthereumProvider from "@metamask/detect-provider"
import { ethers } from 'ethers'
import { AccountState } from '@/recoil/globalState';


export default function ConnectBtn() {
    const [account,setAccount]=useRecoilState(AccountState)  
    const [ensName,setENSName] =useState("")
    const [ensAvater,setENSAvater] =useState("")

    const web3loader = useCallback(
        async() => {
    
         const webProvider = await detectEthereumProvider();
    
        // console.log(webProvider)
            if(webProvider){
              const chainId = await window.ethereum?.request({ method: 'eth_chainId' });
           console.log(chainId)
         
    
        const accounts = await window.ethereum?.request({ method: 'eth_accounts' })
            handleAccountsChanged(accounts)
          }
      }
      , [])
      useEffect(()=>{
          window.addEventListener('load', web3loader)
          window.ethereum?.on('accountsChanged', handleAccountsChanged);
      
          return () => {
            web3loader()
          }
          },[web3loader])
  
      function handleAccountsChanged(accounts) {
              //window.location.reload();
             }
      
             const connectWallet=async()=>{
       
                try{
           
                    const provider = new ethers.providers.Web3Provider(window.ethereum)

          
                    await provider.send("eth_requestAccounts", []);
                    
                     const newsigner = provider.getSigner()
                    
                   
                   const account= await newsigner .getAddress()
                    const resolvedENSname= await provider?.lookupAddress(account);
                    const resolvedENSAvater= await provider?.getAvatar(resolvedENSname ) 
                    setENSName(resolvedENSname)
                    setENSAvater(resolvedENSAvater)
                     setAccount( account)
                    setAccount(account)
                    console.log(resolvedENSname)

                   }catch(error){
                     if(error.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                       //  console.log('metamask did not connect');
                      } else {
                        console.error(error);
                     }
                 }
             }
            
  console.log(ensAvater,"aaaa")
  console.log(ensName,"aaaa")



  return (

    <>
    {account?.length===0&&
     <div className='bg-green-800 px-4 rounded-md text-xs py-3 ' 
       onClick={connectWallet}
      >
        Connect wallet
     </div>
      }

    {account?.length>1&&
   <>

  {ensName?.length>1?
 <div className='bg-green-800  px-4 rounded-md text-xs py-3 flex text-white items-center space-x-2' 
    
     >
       <img src={ensAvater} className="rounded-full h-5 w-5"/>
    <span className='text-md font-semibold'> {ensName}</span>
  </div>
    :

    <div className='bg-green-800 px-4 rounded-md text-xs py-3 flex text-white items-center space-x-2' 
   
   >
    
       <span className='text-md font-semibold'> {account?.slice(0,7)+"..."+account?.slice(-4)}</span>
     </div>
  }
  </>
}
   </>
     
  )
}
