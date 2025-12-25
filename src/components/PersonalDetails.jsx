import React from 'react'

const PersonalDetails = ({personal,setPersonalDetails}) => {

    let handleChange = (e) =>{
       let {name,value}= e.target
       setPersonalDetails({...personal,[name]:value})
    }

  return (
    <>
            <h3 className="mb-4">Personal Details</h3>
            <fieldset className="border p-4 rounded shadow-sm bg-light">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address: </label>
                    <input type="email" id= "email" className="form-control" name="email" value={personal.email} placeholder="Enter email" onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name: </label>
                    <input type="text" id="firstName" className="form-control" name="firstName" placeholder="Enter first name" value={personal.firstName} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name: </label>
                    <input type="text" id="lastName" className="form-control" name="lastName" placeholder="Enter last name" value={personal.lastName} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number: </label>
                    <input type="tel" id="phone" className="form-control" name="phoneNo" placeholder="Enter phone number" value={personal.phoneNo} onChange={handleChange} required/>
                </div>
            </fieldset>
    </>
  )
}

export default PersonalDetails