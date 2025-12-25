import React from 'react'
import { calculateYears } from '../utils/calculateYears'

const ExperienceItem = ({experience,onChange}) => {

    const handleChange = (e) =>{
        const {name,value} = e.target;
        const updatedExp = {...experience,[name]:value};
        if(name==="startDate" || name === "endDate"){
            updatedExp.years = calculateYears(updatedExp.startDate,updatedExp.endDate);
        }
        onChange(experience.id,updatedExp);
        }
    
  return (
    <>
        <fieldset>
            <legend>Experience</legend>
            <div>
                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" name="company" value={experience.company} onChange={handleChange} required/>
            </div>
             <div>
                <label htmlFor="StartDate">Start Date</label>
                <input type="date" id="StartDate" name="startDate" value={experience.startDate} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="endDate">End Date</label>
                <input type="date" id="endDate" name="endDate" value={experience.endDate} onChange={handleChange} required/>
            </div>
            <div>
                <label>Years of Experience</label>
                <input type="text" name="Years" value={experience.years} readOnly/>
            </div>
            
        </fieldset>
    </>
  )
}

export default ExperienceItem