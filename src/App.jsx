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
    console.log(personal)
  }

  return (
    <div className="container mt-3">
        <form onSubmit={handleSubmit}>
            <PersonalDetails personal={personal} setPersonalDetails={setPersonal}/>
            <ExperienceList experiences={experiences} setExperiences={setExperiences}/>
        </form>
    </div>
  )
}

export default App