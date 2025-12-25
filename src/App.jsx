import React,{useState} from 'react'
import PersonalDetails from './components/PersonalDetails'
import ExperienceList from './components/ExperienceList'
import {v4 as uuid} from "uuid"

const App = () => {

    let [personal,setPersonal] = useState({
            email:"",
            firstName:"",
            lastName:"",
            phoneNo:""
        })

        const [experiences,setExperiences] = useState([
            {
             id:uuid(),
             company:"",
             startDate:"",
             endDate:"",
             years:0 
            }
        ])

    const handleSubmit = (e) => {
    e.preventDefault()
   const payload={
    personalDetails:personal,
    professionalExperience:experiences
   };
   console.log("Final Payload:",payload)
  }

  return (
    <div className="container mt-3">
        <h1 className="text-center mb-4">Candidate Information Submission Form</h1>
        <form onSubmit={handleSubmit}>
            <PersonalDetails personal={personal} setPersonalDetails={setPersonal}/>
            <ExperienceList experiences={experiences} setExperiences={setExperiences}/>
            <div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default App