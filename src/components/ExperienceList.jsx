import React from 'react'
import ExperienceItem from './ExperienceItem'
import {v4 as uuid} from "uuid"

const ExperienceList = ({experiences,setExperiences}) => {

    const updateExperience = (id,updatedExp)=>{
        const updatedList = experiences.map(exp=>(exp.id === id?updatedExp:exp))
        setExperiences(updatedList)
    }

    const removeExperience = (id) => {
    if (experiences.length === 1) return; // minimum one required
    setExperiences(experiences.filter(exp => exp.id !== id));
    };

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
        <h3 className="mt-4 mb-4">Professional Experience</h3>
        {experiences.map(exp=>(
            <ExperienceItem key={exp.id} experience={exp} onChange={updateExperience} onRemove={removeExperience}/>
        ))}
        <button type="button" className="btn btn-secondary btn-sm mt-3" onClick={addExperience}>+ Add Experience</button>
    </>
  )
}

export default ExperienceList