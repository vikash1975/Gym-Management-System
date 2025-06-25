import React,{useEffect,useState} from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import {Link} from 'react-router-dom';
import MemberCard from '../../Components/MemberCard/memberCard';

const GeneralUser=()=>{
const [header,setHeader]=useState("");

useEffect(()=>{
const func=sessionStorage.getItem('func');
functionCall(func);
},[])

const functionCall=async(func)=>{
    switch (func) {
      case "monthlyJoined":
        setHeader("Monthly Joined Members")
        break;
      case "threeDayExpire":
        setHeader("Expiring in 3 days Members")
        break;
        case "fourtosevendayexpire":
         setHeader("Expiring In 4-7 Days Members")
         break;
         case "expired":
         setHeader("Expired Members")
         break;
         case "inactivemembers":
          setHeader("Inactive Members")  
          break;
    
    }
}
    return(
        <div className='text-black p-5 w-3/4 flex-col'>
          < div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>
          <Link to={'/dashboard'}className='border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
            <ArrowBackRoundedIcon/> Back To Dashboard
          </Link>
          </div>
            <div className='mt-5 text-xl text-slate-900'>
                 {header}
            </div>
            <div className='bg-slate-100 p-5 mt-5 rounded-lg grid  gap-2 grid-cols-1  md:grid-cols-3 overflow-x-auto h-[80%]'>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />

            </div>
          
        </div>
    )
  }
export default GeneralUser