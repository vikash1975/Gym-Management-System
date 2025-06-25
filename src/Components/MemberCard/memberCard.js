import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import {Link} from 'react-router-dom';


const MemberCard = () => {
  return (
       
       <Link to={'/member/123'} className='bg-white rounded-lg p-3 hover:bg-gradient-to-r hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black cusor-pointer'>
       <div className='w-28 h-28 flex justify-center relative items-center border-2 p-1 mx-auto rounded-full'>
          <img className='w-full h-full rounded-full' src='https://as2.ftcdn.net/v2/jpg/04/98/76/39/1000_F_498763970_XD0R6dPtnsdVlLGyIuxqXHezfnc1s1g4.jpg' alt='Profile Pic'/>
        <CircleIcon className='absolute top-0 left-0' sx={{color:"greenyellow"}}/>
       </div>
       <div className='mx-auto  mt-5 text-center  text-xl font-semibold font-mono'>
       {"Shivam"}
       </div>
       
       <div className='mx-auto mt-2 text-center text-xl font-mono'>
        {"+91 " +"7454992004"}
       </div>
       <div className='mx-auto mt-2 text-center text-xl font-mono'>
        Next Bill Date : {"31-8-2025"}
       </div>
    </Link> 
  )
}

export default MemberCard
