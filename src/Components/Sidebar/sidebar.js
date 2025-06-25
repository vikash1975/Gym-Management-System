import React,{useState,useEffect} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link,useLocation,useNavigate} from 'react-router-dom';


const Sidebar = () => {

  
  const[greeting,setGreeting]=useState("");
  const location=useLocation();// Get the current location
  const navigate=useNavigate();
  const greetingMessage=()=>{
    const currentHour=new Date().getHours();
    if(currentHour < 12){
      setGreeting("Good Morning 🌞");
    }else if(currentHour < 18){
      setGreeting("Good Afternoon ☀️");
    }else if(currentHour < 21){
      setGreeting("Good Evening 🌇")   
     }else{
      setGreeting("Good Night 🌙")
     }}
     useEffect(()=>{
    greetingMessage()},[])

    const handleLogout=async()=>{
      sessionStorage.clear();
      navigate('/')
    }
    
  return (
    <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5 font-extralight'>
      <div className='text-center  text-2xl'>
       Power Zone
      </div>
      <div className='flex gap-5 my-5'>
        <div className='w-[100px] h-[100px] rounded-lg'>
          <img alt='gym pic' className='w-full h-full rounded-full' src="https://www.rukita.co/stories/wp-content/uploads/2021/11/tempat-gym-murah-di-jakarta-1536x1024.jpeg"/>
        </div>
        <div>
          <div className='text-2xl'>{greeting}</div>
          <div className='text-xl mt-1 font-semibold'>Admin</div>
        </div>
      </div>
      <div className='mt-10 py-10  border-t-2 border-gray-700'>
        <Link to='/dashboard' className={`flex items-center gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname==="/dashboard"?'border-2 bg-gradient-to-r from-Indigo-500 via-purple-500 to-pink-500':null}`}>
          <div><HomeIcon/></div>
          <div>Dashboard</div>
        </Link>
         <Link to='/member' className={`flex items-center mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black  ${location.pathname==="/member"?'border-2 bg-gradient-to-r from-Indigo-500 via-purple-500 to-pink-500':null}`}>
          <div><GroupIcon/></div>
          <div>Members</div>
        </Link>
        <div onClick={()=>{handleLogout()}} className='flex items-center mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
          <div><LogoutIcon/></div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
