import React from 'react';
import Login from '../../Components/Login/login';
import Signup from '../../Components/SignUp/signUp';





const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='borer-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-xl'>
        Welcome To Gym Management System
        </div>  
        <div className='w-full bg-cover flex justify-center items-center h-[100%] bg-[url("https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg")]'>
        <div className='w-full lg:flex gap-32'>
        <Login />
        <Signup/>
      
        

       
        </div>
        </div>
        </div>
        
  )
}

export default Home

