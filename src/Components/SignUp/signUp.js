import React,{useState} from 'react';
import './signUp.css';
import Modal from "../Modal/modal";
import ForgotPassword from '../ForgotPassword/forgotPassword';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const SignUp = () => {

    const[forgotPassword, setForgotPassword]=useState(false);
    const[inputField,setInputField]=useState({gymName:"", email:"", userName:"", password:"", profilePic:"https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg"})
    const[loaderImage, setLoaderImage]=useState(false);
  
      const handleClose=()=>{
          setForgotPassword(prev=>!prev);
      }
      
      const handleOnChange=(event,name)=>{
        setInputField({...inputField,[name]:event.target.value})
      }
      console.log(inputField);

      const uploadImage=async(event)=>{

        setLoaderImage(true);
        console.log("Image Uploading");
        
         const files=event.target.files;
         const data=new FormData();
         data.append('file', files[0]);
      
      //dtvsdtcem
      data.append('upload_preset', 'gym-management');

      try {
        const response=await axios.post("https://api.cloudinary.com/v1_1/dtvsdtcem/image/upload", data);
        console.log(response);
        // const imageUrl=response.data.url;
        const imageUrl = response.data.secure_url;
        // setInputField({...inputField,['profilePic']:imageUrl}); 
        setLoaderImage(false);
         setInputField(prev => ({ ...prev, profilePic: imageUrl }));
      } catch (err) {
        console.log(err);
        setLoaderImage(false)
      }
      }
  return (
    <div className=" customSignup w-1/3 p-10 mt--5 ml-20 bg-gray-50 bg-opacity-50 h-[450px] overflow-y-auto">
      <div className="font-sans text-white text-center text-3xl">
        Register Your Gym
      </div>
      <input type="text" value={inputField.email} onChange={(event)=>{handleOnChange(event,"email")}} className="w-full my-10 p-2 rounded-lg"placeholder="Enter E-mail" ></input>
      <input
        type="text" value={inputField.gymName} onChange={(event)=>{handleOnChange(event,"gymName")}} className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Gym Name"></input>
      <input type="text" value={inputField.userName}  onChange={(event)=>{handleOnChange(event,"userName")}} className="w-full mb-10 p-2 rounded-lg" placeholder="Enter UserName"></input>
      <input type="password" value={inputField.password} onChange={(event)=>{handleOnChange(event,"password")}} className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Password">
    </input>

      <input  type="file" onChange={(e)=>{uploadImage(e)}} className="w-full mb-10 p-2 rounded-lg" />
        {
          loaderImage &&  <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
    </Stack>
        }
        
      <img src={inputField.profilePic} className=" mb-10 h-[200px] w-[250px]"/>
      <div className="p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer">
        Register
      </div>
      <div className="p-2 w-[80%] mt-5 border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer" onClick={()=>handleClose()}> Forgot Password</div>
      {forgotPassword && <Modal  header="Forgot Password" handleClose={handleClose} content={<ForgotPassword />} />}
    </div>
  );
};

export default SignUp;
