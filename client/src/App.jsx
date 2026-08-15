import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewPage from './pages/InterviewPage'
import InterviewReport from './pages/InterviewReport'
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'

export const ServerURL = "https://interviewiq-aishi.onrender.com" // in this url, we have to sent the request

function App() {
  
  const dispatch = useDispatch()  //useDispatch is used to set the data to the store

  useEffect(() => {
    const getUser = async() => {
      try{

        const result = await axios.get(ServerURL + "/api/user/current-user", 
          {withCredentials: true})

          dispatch(setUserData(result.data)) //setting user data to store

      }catch(error){
          console.log(`error in getting user from frontend : ${error}`)
          dispatch(setUserData(null))
      }
    }

    getUser()
  }, [dispatch])
  return (
   <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/auth' element = {<Auth/>}/>
    <Route path = '/interview' element = {<InterviewPage/>}/>
    <Route path = '/history' element = {<InterviewHistory/>}/>
    <Route path = '/report/:id' element = {<InterviewReport/>}/>
    <Route path = '/pricing' element = {<Pricing/>}/>
   </Routes>
  )
}

export default App
