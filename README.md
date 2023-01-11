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

           const connectAccount=async()=>{
       
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




### NFT gated access -NFTport API



Patient on booking appointment or on registering on Telemed get an NFT token which serves as a form of registration ID.This NFT token is used to get the video conferencing by checking for ownership.



````js
       

	      const minRegtNft=async()=>{
		toast("Minting NFT")
		  const options = {
		  method: 'POST',
		  headers: {
	                accept: 'application/json',
	                'content-type': 'application/json',
		      Authorization: '5ac96cad-d645-41cc-880f-1e85c554dd4a'
		   },
		  body: JSON.stringify({
	                       chain: 'goerli',
			contract_address: '0xbb01D6DA9D221609D102f413e5A444888798075c',
			metadata_uri: avater? avater :"https://i.redd.it/4iyd1x1xha681.jpg",
			mint_to_address:  account
		  })
		};
		
		fetch('https://api.nftport.xyz/v0/mints/customizable', options)
		  .then(response => response.json())
		  .then(response => {
			toast("NFT minted")
			  setAccess(true)
			  console.log(response)
	
		  })
		  .catch(err => console.error(err));


		  setShowBookAppointment(false)
	
	  }

      



````







###  Video conferencing -huddle sdk


Huddle sdk is use to implement the video conferencing feature between doctors and patients.




````
      import { huddleIframeApp,HuddleIframe,HuddleAppEvent} from "@huddle01/huddle01-iframe";
      
      const handleJoin = async () => {
           try {
                      await huddleClient.join("dev", {
                                 address: "0x5c12DB1E016bEa19aeD67C125dc5b036e39320Cb",
                                 wallet: "",
                                 ens: "axit.eth"
                      });

                      console.log("joined");
           } catch (error) {
                      console.log({ error });
           }
    };

           const iframeConfig = {
                      roomUrl: "https://iframe.huddle01.com/1233",
                      height: "450px",
                      width: "80%"
           }

       
       
            useEffect(() => {
            
		huddleIframeApp.on(HuddleAppEvent.PEER_JOIN, (data) =>
			console.log({ iframeData: data })
		);
		huddleIframeApp.on(HuddleAppEvent.PEER_LEFT, (data) =>
			console.log({ iframeData: data })
		);
	}, []);
  
````



