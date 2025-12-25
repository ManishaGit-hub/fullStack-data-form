import React from 'react'
import { calculateYears } from '../utils/calculateYears'

const ExperienceItem = ({experience,onChange,onRemove}) => {

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
        <fieldset className="border p-4 rounded shadow-sm bg-light mt-3">
            <legend>Experience</legend>
            <div className="mb-3">
                <label className="form-label" htmlFor="companyName">Company Name</label>
                <input type="text" className="form-control" id="companyName" name="company" value={experience.company} onChange={handleChange} required/>
            </div>
             <div className="mb-3">
                <label className="form-label">Start Date</label>
                <input type="date" className="form-control" name="startDate" value={experience.startDate} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">End Date</label>
                <input type="date" className="form-control" name="endDate" value={experience.endDate} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Years of Experience</label>
                <input type="text" className="form-control" name="Years" value={experience.years} readOnly/>
            </div>
            <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemove(experience.id)}>Remove</button>
        </fieldset>
    </>
  )
}

export default ExperienceItem