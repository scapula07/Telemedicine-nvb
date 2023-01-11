# Telemed

Telemed is a platform for remote communication and consultation between medical doctors and patients.




![openpoll](https://firebasestorage.googleapis.com/v0/b/scapula-57ce3.appspot.com/o/telemed%2FScreen%20Shot%202023-01-11%20at%2010.33.59%20AM.png?alt=media&token=390b5c11-760f-4e4a-8d06-2ad8615824a5)



## Table of contents

1. Project description
1. Technologies
1. Dapp Architecture and features
1. Hackathon challanges  implementation 




### Dapp features

Our dapp include the following features;

1. Ethereum naming service integration - ENS service
2. NFT gated access -NFTport API
3. Video conferencing -huddle sdk






###  Hackathon challanges  implementation 


###   ENS service

The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.

We were able to integrate ENS into in our dapp using the Ethers js library to resolve ENS names and avaters.



````js

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
        
   

                   }catch(error){
                     if(error.code === 4001) {
                      
                      } else {
                        console.error(error);
                     }
                 }
             }


````
