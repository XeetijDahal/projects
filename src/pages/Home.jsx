import React,{useState, useEffect} from 'react'

import { useStateContext } from '../context'
import {DisplayCampaigns} from '../components';
export default function Home() {
  const [isLoading,setIsLoading]=useState(false);
  const [Campaigns, setCampaigns] = useState([]);
  const {address, contract, getCampaigns}= useStateContext();
  
  const fetchCampaigns= async()=>{
    setIsLoading(true);
    const data=await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();

    console.log(Campaigns);
  }, [address, contract]);
  
  return (
    <DisplayCampaigns
    title="All Campaigns" 
    isLoading={isLoading}
    campaigns={Campaigns}
    />
  )
}
