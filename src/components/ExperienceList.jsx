import React from 'react'
import ExperienceItem from './ExperienceItem'

const ExperienceList = ({experiences,setExperiences}) => {

    const updateExperience = (id,updatedExp)=>{
        const updatedList = experiences.map(exp=>(exp.id === id?updatedExp:exp))
        setExperiences(updatedList)
    }

    const addExperience=()=>{
        setExperiences([...experiences,{
            id:uuid(),
            company:"",
            startDate:"",
            endDate:"",
            years:0
        }])
    }

  return (
    <>
        <h3>Professional Experience</h3>
        {experiences.map(exp=>(
            <ExperienceItem key={exp.id} experience={exp} onChange={updateExperience}/>
        ))}
        <button type="button" onClick={addExperience}>+ Add Experience</button>
    </>
  )
}

export default ExperienceList