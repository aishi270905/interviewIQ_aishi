import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ServerURL } from '../App';

function InterviewHistory() {
   const [interviews, setInterviews] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
     const getMyInterviews = async() => {
        try {
            const result = await axios.get(ServerURL + "/api/interview/get-interview", {withCredentials: true});
            console.log(result.data)
            setInterviews(result.data)
        } catch (error) {
            console.log(error)
        }
     }

     getMyInterviews();

   },[])

  return (
    <div>History</div>
  )
}

export default InterviewHistory