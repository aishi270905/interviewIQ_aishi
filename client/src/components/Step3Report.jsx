import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Step3Report({report}) {
    if(!report){
        return(
            <div className='min-h-screen flex items-center justify-center'>
                <p className='text-gray-500 text-lg'>
                    Loading Report...
                </p>
            </div>
        );
    }

    const navigate = useNavigate();

    const {
        finalScore = 0,
        confidence = 0,
        communication = 0,
        correctness = 0,
        questionWiseScore = [],
    } = report;

    const questionScoreData = questionWiseScore.map((score, index) => ({
     name: `Q${index + 1}`,
     score: score.score || 0
    }))

    const skills = [
        {label: "Confidence", value: confidence},
        {label: "Communication", value: communication},
        {label: "Correctness", value: correctness},
    ];

    let performanceText = ""
    let shortTagline = ""

    if(finalScore >= 8){
        performanceText = "Ready for job interviews.";
        shortTagline = "Excellent clarity and structured responses.";
    }else if(finalScore >= 5){
        performanceText = "Needs minor improvement before interviews.";
        shortTagline = "Good foundation, refine articulation.";
    }else{
       performanceText = "Significant improvment required.";
       shortTagline = "Work on clarity and confidence."; 
    }

    const score = finalScore
    const percentage = (score / 10) * 100

  return (
    <div className='min-h-screen bg-linear-to-br from-gray-50 to-green-50 px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <div className='md:mb-10 w-full flex items-start gap-4 flex-wrap'>
                            <button 
                             onClick={()=>navigate("/history")}
                             className='mt-1 p-3 rounded-full bg-white shadow hover:shadow-md transition'>
                                <FaArrowLeft
                                 className='text-gray-600'
                                />
                             </button>
                            <div>
                                <h1 className='text-3xl font-bold flex-nowrap text-gray-800'>
                                    Interview Analytics Dashboard
                                </h1>
                                <p className='text-gray-500 mt-2'>
                                    AI-powered performance insights
                                </p>
                            </div>
            </div>

            <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300 font-semibold text-sm sm:text-base text-nowrap'>Download PDF</button>
        </div>

         <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
            <div className='space-y-6'>
                <motion.div 
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 className='bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 text-center'
                >
                 <div className='w-20 h-20'>
                            <CircularProgressbar
                            value={percentage} 
                            text={`${score}/10`}
                            styles={buildStyles({
                                textSize: "28-x",
                                pathColor: '#10b981',
                                textColor: '#ef4444',
                                trailColor: '#e5e7eb'
                            })}/>
                            </div>
                </motion.div>
            </div>
            <div></div>
         </div>
    </div>
  )
}

export default Step3Report