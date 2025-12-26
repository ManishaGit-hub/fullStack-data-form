import React,{useState} from 'react'
import PersonalDetails from './components/PersonalDetails'
import ExperienceList from './components/ExperienceList'
import {v4 as uuid} from "uuid"
import { submitForm } from './utils/submitForm'

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

    const handleSubmit = async(e) => {
    e.preventDefault();
   const payload={
    personalDetails:personal,
    professionalExperience:experiences
   };
   try{
   const result = await submitForm(payload)
   console.log("backend response:",result)
   alert("Form submitted successfully!");
   }
   catch(error){
    console.error("Error subitting form:",error);
    alert("submission failed");
   }
  
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