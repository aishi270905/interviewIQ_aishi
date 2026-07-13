import React, { useState } from 'react';
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react"
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase.js';
import axios from 'axios';
import { ServerURL } from '../App.jsx';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';


function Auth({isModel = false}) {
     
    const dispatch = useDispatch() // setting the data whenever a new user gets authenticated

    const [loading, setLoading] = useState(false);
    
    const handleGoogleAuth = async () => {
      console.log("Button clicked");
      if (loading) 
        return;

      setLoading(true);
  try {
    console.log("1. Before popup");

    const response = await signInWithPopup(auth, provider);

    console.log("2. Popup success");
    console.log(response.user);

    console.log("ServerURL:", ServerURL);
    console.log("Final URL:", ServerURL + "/api/auth/google");

    const result = await axios.post(
      ServerURL + "/api/auth/google",
      {
        name: response.user.displayName,
        email: response.user.email,
      },
      {
        withCredentials: true,
      }
    );

    console.log("3. Backend success");
    dispatch(setUserData(result.data))

  } catch (error) {
    console.log("Error Code:", error.code);
    console.log("Error Message:", error.message);
    console.log(error);
    dispatch(setUserData(null))
  }finally {
    setLoading(false);
  }
};
  return (
    <div className={`w-full ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}`}>
        <motion.div 
        initial = {{opacity:0, y:-40}}
        animate = {{opacity:1, y:0}}
        transition = {{duration: 1.05}}
        className={`w-full ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"} bg-white shadow-2xl border border-gray-200`}>
            <div className='flex items-center justify-center gap-3 mb-6'>
                <div className='bg-black text-white p-2 rounded-lg'>
                    <BsRobot size={18}/>
                </div>
                <h2 className='font-semibold text-lg'>InterviewIQ.AI</h2>
            </div>
            <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
                Continue with{" "}
                <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                    <IoSparkles size={16}/>
                    AI Smart Interview
                </span>
            </h1>
            <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                Sign in to start AI-powered mock interviews, track your progress and unlock detailed performance insights.
            </p>
             <motion.button
               disabled={loading}
               onClick={handleGoogleAuth}
               whileHover={{ opacity: 0.9, scale: 1.03 }}
               whileTap={{ opacity: 1, scale: 0.98 }}
               className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md'
             >
                       <FcGoogle size={20} />
                       {loading ? "Signing In..." : "Continue with Google"}
             </motion.button>
        </motion.div>
    </div>
  )
}

export default Auth